import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  Dimensions,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import PrimaryButton from "../button/PrimaryButton";
import { HEIGHT, WIDTH } from "@/constants/Size";
import CustomButton from "../button/CustomButton";
import { SubContent } from "@/data/arrays";

const { width: screenWidth } = Dimensions.get("window");

interface ContentItem {
  image: ImageSourcePropType;
  text: string;
}

interface Subscription {
  id: number;
  title: string;
  duration: string;
  buttonText: string;
  planImage: ImageSourcePropType;
  contents: ContentItem[];
}

const SubscriptionCard: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animatedValue] = useState(new Animated.Value(0));

  const renderItem = ({
    item,
    index,
  }: {
    item: Subscription;
    index: number;
  }) => {
    return (
      <View
        key={item.id}
        className={`rounded-3xl ${
          activeSlide === index
            ? "bg-weed-primary-100 mb-5 mt-5"
            : "bg-weed-primary"
        } border border-white gap-3 py-5 mt-10 relative mx-3 shadow shadow-base shadow-black`}
        style={{
          width: WIDTH * 0.55,
        }}
      >
        {item.id === 2 && (
          <View
            className={`absolute -top-3 self-center w-28 border border-white rounded-3xl ${
              activeSlide === index ? "bg-weed-primary-100" : "bg-weed-primary"
            }  py-1 px-4 z-10`}
          >
            <Text className="text-white font-inder text-xs text-center">
              Most Popular
            </Text>
          </View>
        )}
        {item.planImage ? (
          <View className="flex flex-row w-full justify-center items-center mt-1">
            <Image
              source={item.planImage}
              className="w-weed-3.1 h-weed-3.1"
              resizeMode="contain"
            />
            <View className="flex-col">
              <Text className="text-white font-italianno text-3xl font-normal ">
                {item.title}
              </Text>
              {item.duration ? (
                <Text className="text-center text-white font-italianno mt-[-14px] text-2xl font-normal">
                  {item.duration}
                </Text>
              ) : null}
            </View>
          </View>
        ) : (
          <View className="flex-col items-center mt-1">
            <Text className="text-white font-italianno text-4xl font-normal">
              {item.title}
            </Text>
            {item.duration ? (
              <Text className="text-center text-white font-italianno text-3xl font-normal">
                {item.duration}
              </Text>
            ) : null}
          </View>
        )}
        <View className="w-full h-full flex-1 justify-between">
          <View className="flex-1 flex-col justify-evenly">
            {item.contents.map((content: ContentItem, idx: number) => (
              <View
                key={idx}
                className="flex flex-row w-full justify-center items-center mb-2"
              >
                <Image
                  source={content.image}
                  className={`w-4 h-4 mr-2 ${
                    activeSlide === index ? "" : "tint"
                  } `}
                  resizeMode="contain"
                  style={{
                    tintColor:
                      activeSlide === index
                        ? undefined
                        : content.image ===
                          require("../../../assets/image/check.png")
                        ? "#00500D"
                        : "",
                  }}
                />
                <Text className="text-white font-inder text-base font-normal">
                  {content.text}
                </Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => {}}
            className="border border-white h-10 items-center justify-center rounded-3xl bg-weed-primary mx-auto mb-2"
          >
            <Text className="text-white font-inder text-base px-4">
              {item.buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (WIDTH * 0.6));
    setActiveSlide(index);
    Animated.spring(animatedValue, {
      toValue: index,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: activeSlide,
      useNativeDriver: true,
    }).start();
  }, [activeSlide]);

  return (
    <View
      className="items-center justify-start pb-5"
      style={{ height: HEIGHT * 0.73 }}
    >
      <FlatList
        data={SubContent}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        onScroll={handleScroll}
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
      <View
        style={{
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
        }}
      >
        {SubContent.map((_, i) => (
          <View
            key={i}
            className={
              i === activeSlide
                ? "bg-weed-primary-100 h-2.5 w-2.5 rounded-full mx-1"
                : "bg-transparent h-2.5 w-2.5 rounded-full border border-[0.5px] border-white mx-1"
            }
          />
        ))}
      </View>
      <Text className="font-inder text-xs text-black px-5 text-center mb-5 px-12">
        **Subscription fees are billed on a monthly basis. Your subscription
        will automatically renew unless cancelled at least 24 hours before the
        end of the current period. Payment will be charged to your iTunes or
        Google Play account upon confirmation of purchase. You can manage your
        subscription and turn off auto-renewal in your account settings.
      </Text>
    </View>
  );
};

export default SubscriptionCard;
