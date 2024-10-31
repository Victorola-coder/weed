import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

type ProfileImageProps = {
  onImageUpload?: (uri: string) => void;
};

const UploadProfileImageButton = ({ onImageUpload }: ProfileImageProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleChooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      if (onImageUpload) {
        onImageUpload(result.assets[0].uri);
      }
    } else {
      console.log("User cancelled image picker");
    }
  };

  return (
    <TouchableOpacity
      className="w-weed-12.5 h-weed-15.5 rounded-3xl  border-white border-2 bg-weed-profile-add items-center justify-center"
      activeOpacity={0.7}
      onPress={handleChooseImage}
    >
      {profileImage ? (
        <Image
          source={{ uri: profileImage }}
          resizeMode="cover"
          className="w-full h-full rounded-3xl"
        />
      ) : (
        <Image
          source={require("../../../assets/image/add.png")}
          className="w-12 h-12"
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export default UploadProfileImageButton;
