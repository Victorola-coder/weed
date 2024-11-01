import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { FULLHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import SubHeaderText from "@/components/texts/SubHeaderText";
import { weedItems } from "@/data/arrays";
import { FavoriteWeedScreenProps } from "@/data/list";
import { Platform } from "react-native";

const FavoriteWeedScreen = (props: FavoriteWeedScreenProps) => {
  const { ViewKey } = props;

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectItem = (name: string) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(name)
        ? prevItems.filter((item) => item !== name)
        : [...prevItems, name]
    );
    console.log(
      selectedItems.includes(name) ? "Unselected:" : "Selected:",
      name
    );
  };

  return (
    <View
      className="w-weed-20.6 justify-center items-center"
      style={{
        // marginTop: Dimensions.get("window").width * 0.06,
        height: MIDHEIGHT,
      }}
      // style={{
      //   height: MIDHEIGHT,
      //   paddingTop: Platform.OS === "android" ? 45 : 20,
      // }}
      key={ViewKey}
    >
      <View className="flex-1 w-weed-20.6 flex-col items-center">
        <View className="w-weed-20.6 flex justify-center items-center fixed bg-weed-primary pt-0">
          <SubHeaderText className="text-center max-w-sm font-inder font-normal text-weed-primary-100 text-lg pb-0">
            Choose Favourite Weed
          </SubHeaderText>
        </View>
        <ScrollView
          className="w-weed-20.6 h-full mt-9"
          style={{ height: MIDHEIGHT }}
          showsVerticalScrollIndicator={false}
        >
          <View className="w-weed-20.6 justify-center items-center gap-4 flex-row flex-wrap pb-32">
            {weedItems.map((item) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => handleSelectItem(item.name)}
                className={`border border-white border-1 w-weed-9.7 h-weed-14.8 rounded-[1.25rem] my-1 flex-col items-center ${
                  selectedItems.includes(item.name)
                    ? "bg-weed-primary-100"
                    : "bg-transparent"
                }`}
                activeOpacity={1}
              >
                <Text className="font-inder font-normal text-white w-48 px-8 pt-8 pb-4 text-sm text-left">
                  {item.name}
                </Text>
                <Image
                  source={item.image}
                  className="w-weed-4.8 h-6.6"
                  resizeMode="contain"
                />
                <View
                  className="bg-black/10 h-3 w-3 mt-4 rounded-full"
                  style={{ transform: [{ scaleX: 7 }] }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FavoriteWeedScreen;
