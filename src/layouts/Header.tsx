import FilterIcon from "@/components/svg/FilterIcon";
import { Logo } from "@/components/svg/Logo";
import QrCodeIcon from "@/components/svg/QrCodeIcon";
import { Colors } from "@/constants/Colors";
import { HEADERHEIGHT } from "@/constants/Size";
import { MainFilterProps } from "@/routes/types";
import * as React from "react";
import { Image, Text, TouchableOpacity, View, ViewStyle } from "react-native";

interface HeaderProps extends Partial<MainFilterProps> {
  className?: string;
  style?: ViewStyle;
  home?: boolean;
}

const Header = (props: HeaderProps) => {
  const { className, style, home = false, navigation, route } = props;
  const HandleNavigation = () => {
    navigation?.navigate("main-filter");
  };
  const HandleQRCodeNavigation = () => {
    navigation?.navigate("weed-key");
  };
  return (
    <View
      className={`flex-row items-center justify-between ${className} ${
        home ? "w-full absolute top-0" : "w-fit absolute top-0"
      } px-6 self-center z-50`}
      // style={{ height: 60 }}
    >
      {home && (
        <TouchableOpacity onPress={HandleQRCodeNavigation}>
          <QrCodeIcon />
        </TouchableOpacity>
      )}
      <View className="flex-row items-center justify-center gap-2">
        <View className="pb-2.5">
          <Logo color={Colors["weed-primary"][100]} width="27" height="27" />
        </View>
        <View className="">
          <Text
            className="text-weed-primary-100 text-4xl font-normal font-italianno"
            style={{
              textShadowColor: "#00500D",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            Weed Match
          </Text>
        </View>
      </View>

      {home && (
        <TouchableOpacity onPress={HandleNavigation}>
          <FilterIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
