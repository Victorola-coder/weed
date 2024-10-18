import React, { useState } from "react";
import { View, Text } from "react-native";
import UploadProfileImageButton from "@/components/button/UploadProfileImageButton";
import { UploadProfileImageProps } from "@/data/list";


const UploadProfileImage = ({ onImageUpload, ViewKey }: UploadProfileImageProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (uri: string) => {
    setProfileImage(uri);
    onImageUpload(true);
  };

  return (
    <View className="w-weed-20.6 justify-start items-center mt-1" key={ViewKey}>
      <Text className="text-center font-inder text-weed-primary-100 text-base pb-20">
        Upload one photo / avatar
      </Text>
      <UploadProfileImageButton onImageUpload={handleImageUpload} />
      <Text className="text-center max-w-xs font-inder font-normal text-weed-primary-100 text-lg pt-20">
        No strict guidelines
      </Text>
    </View>
  );
};

export default UploadProfileImage;
