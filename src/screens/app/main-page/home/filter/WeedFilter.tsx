import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import Header from "@/layouts/Header";
import PrimaryButton from "@/components/button/PrimaryButton";
import { FavouriteWeedScreenProps, WeedFilterProps } from "@/routes/types";
import DirectionButton from "@/components/button/DirectionButton";
import SubHeaderText from "@/components/texts/SubHeaderText";
import { weedItems } from "@/data/arrays";
import { WeedFilterScreenProps } from "@/data/list";


const WeedFilterScreen = ({ navigation }: WeedFilterProps, props: WeedFilterScreenProps) => {
  const { ViewKey } = props;

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isAddActive, setIsAddActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

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

  const handleNext = () => {
    console.log("Next clicked");
    navigation.goBack();
  };

  const handlePrev = () => {
    console.log("Back clicked");
    navigation.goBack();
  };

  const handleAdd = () => {
    setIsAddActive(true);
    setIsSearchActive(false);
  };

  const handleSearch = () => {
    setIsSearchActive(true);
    setIsAddActive(false);
  };

  const handleSearchClose = () => {
    setIsSearchActive(false);
  };

  const handleAddClose = () => {
    setIsAddActive(false);
  };

  return (
    <ScreenView className="bg-weed-primary" marginTop={170}>
      <View style={{ height: HEIGHT, alignItems: "center" }}>
        <View
          className="flex w-full justify-center items-center"
          style={{ height: FULLHEIGHT }}
        >
          <View
            className="w-full items-center justify-between flex flex-row px-5"
            style={{ height: HEADERHEIGHT }}
          >
            {isAddActive ? (
              <TouchableOpacity className="" onPress={handleAddClose}>
                <Image
                  source={require("../../../../../../assets/image/add.png")}
                  className="h-7 w-7"
                  resizeMode="contain"
                  tintColor="#00500D"
                  style={{ transform: [{ rotate: "45deg" }] }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity className="" onPress={handleAdd}>
                <Image
                  source={require("../../../../../../assets/image/add.png")}
                  className="h-7 w-7"
                  resizeMode="contain"
                  tintColor="#00500D"
                />
              </TouchableOpacity>
            )}
            <Text className="text-center max-w-sm font-inder font-normal text-weed-primary-100 text-2.5xl uppercase">
              Weed Filter
            </Text>
            {isSearchActive ? (
              <TouchableOpacity className="" onPress={handleSearchClose}>
                <Image
                  source={require("../../../../../../assets/image/add.png")}
                  className="h-7 w-7"
                  resizeMode="contain"
                  tintColor="#00500D"
                  style={{ transform: [{ rotate: "45deg" }] }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity className="" onPress={handleSearch}>
                <Image
                  source={require("../../../../../../assets/image/search.png")}
                  className="h-7 w-7"
                  resizeMode="contain"
                  tintColor="#00500D"
                />
              </TouchableOpacity>
            )}
          </View>
          <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
            <View className="flex-1 w-full flex-col items-center gap-2">
              {isAddActive ? (
                <View
                  className="w-full flex items-center justify-start px-16 pt-48"
                  style={{ height: MIDHEIGHT }}
                >
                  <Text className="text-weed-primary-100 text-lg font-inder font-bold max-w-sm text-center">
                    Can't find the preferred
                  </Text>
                  <Text className="text-weed-primary-100 text-lg font-inder font-bold max-w-sm text-center">
                    weed. send us the name
                  </Text>
                  <View className="w-full h-10 border border-2 border-t-0 border-weed-primary-100 justify-center items-center rounded-2xl rounded-t-none mt-8">
                    <TextInput
                      placeholder=""
                      className="w-full px-5 text-weed-primary-100 font-inder"
                    />
                  </View>
                  <View className="pt-weed-3.0">
                    <PrimaryButton
                      onPress={() => {}}
                      className="w-weed-6.2 rounded-2xl bg-weed-primary-100 mx-auto"
                    >
                      {" "}
                      Done
                    </PrimaryButton>
                  </View>
                </View>
              ) : isSearchActive ? (
                <View className="w-full h-screen items-center bg-black/40 opacity-50 mt-10 px-16 py-10">
                  <View className="w-weed-17.5 h-10 border border-2 border-t-0 border-weed-primary-100 justify-center items-center rounded-2xl rounded-t-none">
                    <TextInput
                      placeholder=""
                      className="w-full px-5 text-weed-primary-100 font-inder"
                    />
                  </View>
                </View>
              ) : (
                <View className="w-full items-center">
                  <SubHeaderText className="text-center max-w-sm font-inder font-normal text-weed-primary-100 text-lg pb-8">
                    Filter for weed
                  </SubHeaderText>
                  <View className="w-weed-20.6 justify-center items-center gap-4 flex-row flex-wrap pb-10">
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
                </View>
              )}
            </View>
          </ScrollView>
          {isAddActive ? (
            ""
          ) : isSearchActive ? (
            ""
          ) : (
            <View className="w-weed-20.6">
              <DirectionButton
                handlePrev={handlePrev}
                NextText="Done"
                BackText="Back"
                nextClassName="bg-weed-primary-100 border border-white"
                backClassName="bg-weed-primary-100 border border-white"
                className="absolute bottom-10 justify-between"
                handleNext={handleNext}
              />
            </View>
          )}
        </View>
      </View>
    </ScreenView>
  );
};

export default WeedFilterScreen;
