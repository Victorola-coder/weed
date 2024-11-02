import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  PixelRatio,
} from "react-native";
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
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleChooseImage}
    >
      {profileImage ? (
        <Image
          source={{ uri: profileImage }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require("../../../assets/image/add.png")}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: PixelRatio.roundToNearestPixel(
      Dimensions.get("window").width * 0.52
    ), // Adjust size relative to screen width
    height: PixelRatio.roundToNearestPixel(
      Dimensions.get("window").width * 0.56
    ),
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#7C97C280",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: {
        paddingVertical: 5, // Fine-tune for Android if needed
        marginTop: 30,
      },
      ios: {
        marginTop: 0,
      },
    }),
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  icon: {
    width: 48,
    height: 48,
  },
});

export default UploadProfileImageButton;
