import {
  ColorValue,
  StatusBar,
  ImageBackground,
  View,
  Platform,
  Dimensions,
} from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DimensionValue } from "react-native";
import { Image } from "react-native";
import { PixelRatio } from "react-native";

type Props = {
  children: ReactNode;
  className?: string;
  backgroundColor?: ColorValue | undefined;
  height?: DimensionValue | undefined;
  marginTop?: DimensionValue | undefined;
  sub?: boolean;
};

const ScreenView = (props: Props) => {
  const { children, backgroundColor, height, marginTop, sub, className } =
    props;

  return (
    <SafeAreaView
      className={className}
      style={{
        flex: 1,
        backgroundColor: backgroundColor || "#578461",
        paddingTop: Platform.OS === "android" ? 20 : 0,
      }}
    >
      <StatusBar
        barStyle={"default"}
        backgroundColor={backgroundColor || "#578461"}
      />
      {/* Container to center the image and contents */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* Background image with a reduced width */}
        <Image
          source={require("../../assets/backgroundImage.png")}
          style={{
            // width: 377.1,
            // height: 352.26,
            width: PixelRatio.roundToNearestPixel(
              Dimensions.get("window").width * 0.97
            ), // Adjust size relative to screen width
            height: PixelRatio.roundToNearestPixel(
              Dimensions.get("window").height * 0.43
            ),
            position: "absolute",
            opacity: 0.1,
            display: sub ? "none" : "flex",
          }}
        />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default ScreenView;

// <ImageBackground
//   source={require("../../assets/backgroundImage.png")}
//   style={{
//     width: "100%",
//     height: "100%",
//   }}
//   imageStyle={{
//     height: 350,
//     opacity: 0.1,
//     // height: 349,
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//     marginTop,
//     // position: "absolute",
//     // top: Platform.OS === "android" ? "16.2%" : "20%",
//     // transform: [{ translateY: -75 }],
//     objectFit: "cover",
//     display: sub ? "none" : "flex",
//   }}
// >
//   {/* Center the content */}
//   {/* <View style={{ width: "100%", height }}> */}
//   {children}
//   {/* </View> */}
// </ImageBackground>
