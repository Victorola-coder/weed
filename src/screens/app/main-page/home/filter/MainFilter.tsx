import { HEADERHEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  Switch,
} from "react-native";
import Slider from "@react-native-community/slider";
import { MainFilterProps } from "@/routes/types";
import ToggleSwitch from "@/components/button/ToggleSwitch";

const MainFilter = ({ navigation }: MainFilterProps) => {
  const [language, setLanguage] = useState("English");
  const [strainType, setStrainType] = useState("Indica");
  const [showLanguages, setShowLanguages] = useState(false);
  const [showStrainType, setShowStrainType] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [isToggleEnabled, setIsToggleEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isStatusEnabled, setIsStatusEnabled] = useState(false);
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
    setRotate(showLanguages ? 0 : 180);
  };

  const toggleStrainType = () => {
    setShowStrainType(!showStrainType);
    setRotate(showStrainType ? 0 : 180);
  };

  const toggleSwitch = () =>
    setIsToggleEnabled((previousState) => !previousState);

  const toggleLocation = () => {
    setIsLocationEnabled((previousState) => !previousState);
  };

  const toggleStatus = () =>
    setIsStatusEnabled((previousState) => !previousState);
  const languages = [
    { label: "English", value: "English" },
    { label: "German", value: "German" },
  ];

  const strainTypes = [
    { label: "Indica", value: "Indica" },
    { label: "Sativa", value: "Sativa" },
    { label: "Hybrid", value: "Hybrid" },
  ];

  const goBack = () => {
    navigation.goBack();
  };

  const goToSpecificWeed = () => {
    navigation.navigate("weed-filter");
  };

  return (
    <ScreenView className="flex-1" height={"100%"} marginTop={173}>
      <View className="flex-1 w-full px-5 gap-0">
        <View
          className="w-full flex-row items-center"
          style={{ height: HEADERHEIGHT }}
        >
          <TouchableOpacity onPress={goBack}>
            <Image
              source={require("../../../../../../assets/image/back.png")}
              className="h-5 w-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-3xl font-inder font-normal text-weed-primary-100 uppercase">
            Weed Filter
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="w-full gap-8 flex items-center pb-20">
            <View className="border border-weed-border border-0.5 w-weed-17.5 h-weed-11.3 rounded-lg p-6 gap-weed-1.6 px-2">
              <Text className="text-black text-lg text-center font-inder font-normal">
                Show Status
              </Text>
              <View className="flex flex-row gap-4 justify-center items-center">
                <Text
                  className={`text-lg font-inder font-normal ${
                    isStatusEnabled ? "text-black" : "text-weed-primary-100"
                  }`}
                >
                  Offline
                </Text>
                <ToggleSwitch
                  value={isStatusEnabled}
                  onValueChange={toggleStatus}
                />
                <Text
                  className={`text-lg font-inder font-normal ${
                    !isStatusEnabled ? "text-black" : "text-weed-primary-100"
                  }`}
                >
                  Online
                </Text>
              </View>
              <Text className="text-black/40 text-center font-inder font-normal text-xs">
                show consumer status when using App
              </Text>
            </View>
            <View className="w-weed-22.5 border border-[#weed-border] border-0.5 rounded-lg p-4 py-8 mt-4  gap-2">
              <Text className="text-black text-lg font-inder font-normal px-2">
                Filter by Distance
              </Text>
              <View className="w-full bg-[#weed-border] h-0.5" />
              <Text className="text-black text-lg font-inder font-normal text-center">
                Up to{" "}
                <Text className="text-weed-primary-100">{sliderValue}</Text> km
                away
              </Text>
              <View className="w-full my-4">
                <Slider
                  style={{ width: "100%", height: 40 }}
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                  value={sliderValue}
                  onValueChange={(value) => setSliderValue(value)}
                  minimumTrackTintColor="#00500D"
                  maximumTrackTintColor="#000000"
                  thumbTintColor="#000000"
                />
              </View>
              <View className="flex-1 flex-row justify-between items-center w-full">
                <Text className="text-black font-inder font-normal w-full flex-1 text-base">
                  See people further away if I run out
                </Text>
                <ToggleSwitch
                  value={isLocationEnabled}
                  onValueChange={toggleLocation}
                />
              </View>
            </View>
            <View className="w-weed-20.6">
              <Text className="text-black font-inder font-normal text-lg px-4 pb-weed-1">
                Filter by City
              </Text>
              <View className="border border-weed-primary-100 justify-center items-center h-weed-2.5 rounded-md w-weed-20.6 mx-auto w-full flex-row items-center px-4 my-1">
                <Text className="text-base font-inder text-center font-normal">
                  Hamburg, DE
                </Text>
              </View>
            </View>
            <View className="w-weed-20.6">
              <Text className="text-black font-inder font-normal text-lg px-4 pb-weed-1">
                Filter by Strain Type
              </Text>
              <TouchableOpacity onPress={toggleStrainType} activeOpacity={0.5}>
                <View className="border border-weed-primary-100 h-weed-2.5 rounded-md w-weed-20.6 mx-auto w-full flex-row items-center px-4 my-1">
                  <View className="flex-1 items-center justify-center">
                    <Text className="text-base font-inder font-normal">
                      {strainType}
                    </Text>
                  </View>
                  <Animated.Image
                    source={require("../../../../../../assets/image/arrow_down.png")}
                    className="absolute right-7 h-5 w-8"
                    resizeMode="cover"
                    style={{
                      transform: [{ rotate: rotate + "deg" }],
                    }}
                  />
                </View>
              </TouchableOpacity>
              {showStrainType && (
                <Animated.View
                  className={`h-${showStrainType ? "auto" : 0} overflow-hidden`}
                >
                  {strainTypes.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setStrainType(item.value);
                        setShowStrainType(false);
                        setRotate(0);
                      }}
                    >
                      {item.label !== strainType ? (
                        <View className="border border-weed-primary-100 h-weed-2.5 rounded-md w-weed-20.6 mx-auto w-full justify-center my-1">
                          <Text className="text-center text-base font-inder font-normal">
                            {item.label}
                          </Text>
                        </View>
                      ) : null}
                    </TouchableOpacity>
                  ))}
                </Animated.View>
              )}
            </View>
            <View className="w-weed-20.6">
              <Text className="text-black font-inder font-normal text-lg px-4 pb-weed-1">
                Languages
              </Text>
              <TouchableOpacity onPress={toggleLanguages} activeOpacity={0.5}>
                <View className="border border-weed-primary-100 h-weed-2.5 rounded-md w-weed-20.6 mx-auto w-full flex-row items-center px-4 my-1">
                  <View className="flex-1 items-center justify-center">
                    <Text className="text-base font-inder font-normal">
                      {language}
                    </Text>
                  </View>
                  <Animated.Image
                    source={require("../../../../../../assets/image/arrow_down.png")}
                    className="absolute right-7 w-8 h-5"
                    resizeMode="cover"
                    style={{
                      transform: [{ rotate: rotate + "deg" }],
                    }}
                  />
                </View>
              </TouchableOpacity>
              {showLanguages && (
                <Animated.View
                  className={`h-${showLanguages ? "auto" : 0} overflow-hidden`}
                >
                  {languages.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setLanguage(item.value);
                        setShowLanguages(false);
                        setRotate(0);
                      }}
                    >
                      {item.label !== language ? (
                        <View className="border border-weed-primary-100 h-weed-2.5 rounded-md w-weed-20.6 mx-auto w-full justify-center my-1">
                          <Text className="text-center text-base font-inder font-normal">
                            {item.label}
                          </Text>
                        </View>
                      ) : null}
                    </TouchableOpacity>
                  ))}
                </Animated.View>
              )}
            </View>
            <View className="flex flex-row items-center justify-between w-weed-20.6">
              <Text className="text-black text-lg font-inder font-normal">
                Filter for specific weed
              </Text>
              <TouchableOpacity onPress={goToSpecificWeed}>
                <Image
                  source={require("../../../../../../assets/image/arrow_down.png")}
                  className="w-8 h-5"
                  resizeMode="cover"
                  style={{ transform: [{ rotate: "270deg" }] }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenView>
  );
};

export default MainFilter;
