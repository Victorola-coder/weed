import { ColorValue, StatusBar, ImageBackground, View } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DimensionValue } from "react-native";

type Props = {
  children: ReactNode;
  className?: string;
  backgroundColor?: ColorValue | undefined;
  height?: DimensionValue | undefined;
  marginTop?: DimensionValue | undefined;
  sub?: boolean;
};

const ScreenView = (props: Props) => {
  const { children, backgroundColor, height, marginTop, sub } = props;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor || "#578461",
      }}
    >
      <StatusBar
        barStyle={"default"}
        backgroundColor={backgroundColor || "#578461"}
      />
      {/* Container to center the image and contents */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* Background image with a reduced width */}
        <ImageBackground
          source={require("../../assets/backgroundImage.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
          imageStyle={{
            opacity: 0.1,
            height: 349,
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            marginTop,
            display: sub ? "none" : "flex",
          }}
        >
          {/* Center the content */}
          <View style={{ width: "100%", height }}>{children}</View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ScreenView;
