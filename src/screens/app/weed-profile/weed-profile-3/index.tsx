import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { HEADERHEIGHT, HEIGHT } from "@/constants/Size";
import ScreenView from "@/layouts/ScreenView";
import Header from "@/layouts/Header";
import UploadProfileImageButton from "@/components/button/UploadProfileImageButton";
import CustomInput from "@/components/input/CustomInput";
import CustomBioInput from "@/components/input/CustomBioInput";
import DirectionButton from "@/components/button/DirectionButton";
import { ThirdWeedProfileScreenProps } from "@/routes/types";
import CustomButton from "@/components/button/CustomButton";
import PrimaryButton from "@/components/button/PrimaryButton";
import CannabisStrain from "../questionaire/cannabis-strain";
import CannabisMethod from "../questionaire/cannabis-method";
import CannabisProperties from "../questionaire/cannabis-properties";
import StrainEffects from "../questionaire/strain-effects";

const ThirdWeedProfileScreen = ({
  navigation,
}: ThirdWeedProfileScreenProps) => {
  const [weedname, setWeedName] = useState("");
  const [weedbio, setWeedBio] = useState("");
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleNext = () => {
    navigation.navigate("app-stack");
  };

  const handlePrev = () => {
    navigation.goBack();
  };

  const handleFocus = () => {
    scrollViewRef.current?.scrollTo({ y: 50, animated: true });
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      {overlayVisible && (
        <View className="absolute top-0 left-0 w-full h-full justify-center items-center bg-transparent z-[1]">
          <View className="z-[2]">
            <Text className="text-red-900 font-inder max-w-xs text-center">
              You need at least one
            </Text>
            <Text className="text-red-900 font-medium font-inder text-center">
              weed profile to proceed
            </Text>
            <PrimaryButton
              onPress={handleCloseOverlay}
              className="bg-weed-primary-100 border border-white w-36 rounded-2xl mx-auto mt-14"
            >
              OK
            </PrimaryButton>
          </View>
          <View className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[1]" />
        </View>
      )}
      <ScreenView className="bg-weed-primary" marginTop={190}>
        <View className="bg-weed-primary w-full h-14">
          <Header />
        </View>
        <View style={{ height: HEIGHT }}>
          <View className="w-full flex-1 justify-center items-center pb-20">
            <ScrollView
              ref={scrollViewRef}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 68 }}
            >
              <View className="flex-1 w-full flex-col items-center gap-3 mt-3 py-3 px-10">
                <Text className="text-center max-w-lg font-inder font-normal text-weed-primary-100 text-3xl uppercase pb-8">
                  Weed Profile 3
                </Text>
                <View className="w-full flex-col flex items-center gap-4">
                  <View className="">
                    <UploadProfileImageButton />
                  </View>
                  <View className="gap-2 mt-4">
                    <View className="">
                      <CustomInput
                        value={weedname}
                        onChange={(text) => setWeedName(text)}
                        onFocus={handleFocus}
                        label="Weed name"
                        textClass="text-base w-weed-20.6 text-weed-primary-100"
                        viewClass="gap-2 px-4 w-weed-20.6"
                        className="w-weed-20.6 rounded-lg"
                        labelClassname="w-weed-20.6 px-2"
                      />
                    </View>
                    <View className="">
                      <CustomBioInput
                        value={weedbio}
                        onChange={(text) => setWeedBio(text)}
                        label="Weed bio"
                        textClass="text-base w-weed-20.6 px-2 text-weed-primary-100"
                        viewClass="gap-2 w-weed-20.6"
                        className="w-weed-20.6 rounded-lg"
                      />
                    </View>
                  </View>
                </View>
                <View className="w-weed-20.6 pt-weed-2.6">
                  <View className="gap-weed-1.6">
                    <Text className="text-center w-full font-inder font-normal text-black text-base">
                      Cannabis questionnaire
                    </Text>
                    <View className="gap-16 pb-16">
                      <CannabisStrain />
                      <StrainEffects />
                      <CannabisProperties />
                      <CannabisMethod />
                    </View>
                  </View>
                  <View className="h-weed-3.7 w-weed-20.6 rounded-2xl border border-gray-300 bg-weed-primary justify-center items-center flex-row mb-28 gap-5">
                    <Text className="font-inder font-normal text-base text-white">
                      Reached the maximum profile
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View className="w-weed-20.6 mx-auto">
            <DirectionButton
              handlePrev={handlePrev}
              NextText="Start"
              BackText="Back"
              nextClassName="bg-weed-primary-100 border border-white"
              backClassName="bg-weed-primary-100 border border-white"
              className="w-weed-20.6 absolute bottom-28 mb-1 justify-between"
              handleNext={handleNext}
            />
          </View>
        </View>
      </ScreenView>
    </>
  );
};

export default ThirdWeedProfileScreen;
