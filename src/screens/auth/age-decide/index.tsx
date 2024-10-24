import { Colors } from "@/constants/Colors";
import { FULLHEIGHT, HEADERHEIGHT, HEIGHT, MIDHEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import React, { useState } from "react";
import { Animated, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "@rneui/themed";
import PrimaryButton from "@/components/button/PrimaryButton";
import Header from "@/layouts/Header";
import { AgeSelectionScreenProps } from "@/routes/types";

const AgeSelectionScreen = ({ navigation }: AgeSelectionScreenProps) => {
  const [checked, setChecked] = useState(false);
  const [isAbove18, setisAbove18] = useState(false);
  const [isUnder18, setisUnder18] = useState(false);
  const [language, setLanguage] = useState("English");
  const [showLanguages, setShowLanguages] = useState(false);
  const [rotate, setRotate] = useState(0);
  const toggleCheckbox = () => setChecked(!checked);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleUnder18Press = () => {
    setisUnder18(true);
    setTimeout(() => {
      navigation.navigate("rejection-screen");
    }, 2000);
  };

  const handleAbove18Press = () => {
    setisAbove18(true);
    setisUnder18(false);
  };

  const handleDone = () => {
    if (checked) {
      setAgeConfirmed(true);
      setShowOverlay(true);
      setTimeout(() => {
        navigation.navigate("signin-screen");
      }, 2000);
    } else {
      alert(
        "Please confirm that the information provided is true and accurate"
      );
    }
  };

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
    setRotate(showLanguages ? 0 : 180);
  };

  const languages = [
    { label: "English", value: "English" },
    { label: "German", value: "German" },
  ];

  return (
    <>
      <ScreenView className="bg-weed-primary" marginTop={190}>
        {isUnder18 && (
          <View
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"
          />
        )}
        {showOverlay && (
          <View
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"
          />
        )}
        <Header />
        <View className="mt-14">
          <View
            className="justify-center items-center pb-14"
            style={{ height: FULLHEIGHT }}
          >
            <View className="mx-auto">
              <View
                className={`${isUnder18 ? 'relative z-[2]' : ''}`}
              >
                <PrimaryButton
                  onPress={handleUnder18Press}
                  className={`border border-weed-primary-100 w-36 mt-12 rounded-2xl mx-auto ${isUnder18 ? "bg-weed-primary-100 border border-white " : ""
                    }`}
                  textClassName={`${isUnder18 ? "text-white" : ""}`}
                >
                  I am under 18
                </PrimaryButton>
              </View>
              <View>
                <PrimaryButton
                  onPress={handleAbove18Press}
                  className={`border border-weed-primary-100 w-36 mt-12 rounded-2xl mx-auto ${isAbove18 ? "bg-weed-primary-100 border-white" : ""
                    }`}
                >
                  I am over 18
                </PrimaryButton>
              </View>
            </View>
            <View className="gap-weed-1.6 mt-12">
              <Text className="text-center text-lg font-inder font-normal">
                App Languages
              </Text>
              <View>
                <TouchableOpacity onPress={toggleLanguages} activeOpacity={0.5}>
                  <View className="border border-weed-primary-100 h-weed-2.5 rounded-md w-weed-20.6 mx-auto w-full flex-row items-center px-4 my-1">
                    <View className="flex-1 items-center justify-center">
                      <Text className="text-base font-inder font-normal leading-5">
                        {language}
                      </Text>
                    </View>
                    <Animated.Image
                      source={require("../../../../assets/image/arrow_down.png")}
                      className="absolute right-7 h-4 w-7"
                      resizeMode="contain"
                      style={{
                        transform: [{ rotate: rotate + "deg" }],
                      }}
                    />
                  </View>
                </TouchableOpacity>
                {showLanguages && (
                  <Animated.View
                    className={`h-${showLanguages ? "auto" : 0
                      } overflow-hidden`}
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
                            <Text className="text-center text-base font-inder font-normal leading-5">
                              {item.label}
                            </Text>
                          </View>
                        ) : null}
                      </TouchableOpacity>
                    ))}
                  </Animated.View>
                )}
              </View>
            </View>
            <View className="flex-row w-weed-20.6 items-center pt-12 mb-11">
              <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="#000"
                uncheckedColor="#F6FEFF"
                wrapperStyle={{
                  backgroundColor: "#F6FEFF",
                  borderRadius: 5,
                  marginVertical: 0,
                  padding: 0,
                }}
                containerStyle={{
                  backgroundColor: Colors["weed-primary"].DEFAULT,
                  padding: 0,
                }}
              />
              <Text className="text-sm font-inder font-normal leading-4 px-6">
                I can confirm that the information provided by me is true and
                accurate
              </Text>
            </View>

            <View
              className={`${ageConfirmed ? 'relative z-[2]' : ''}`}
            >
              <PrimaryButton
                onPress={handleDone}
                className={`border border-weed-primary-100 w-36 rounded-2xl mx-auto ${ageConfirmed ? "bg-weed-primary-100 border border-white" : ""
                  }`}
                textClassName={`${ageConfirmed ? "text-white" : ""}`}
              >
                Done
              </PrimaryButton>
            </View>
          </View>
        </View>
      </ScreenView>
    </>
  );
};

export default AgeSelectionScreen;