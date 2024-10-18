import React, { Children } from "react";
import { Text } from "react-native";

type TextProps = {
    className?: string;
    children?: React.ReactNode;
    color?: string;
}
const HeaderText = (props: TextProps) => {
    const { className, children, color } = props;
    return (
        <Text
            className={`${className} font-normal`}
            style={{
                textShadowColor: `${color}`,
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 1,
            }}
        >
            {children}
        </Text>
    );
};

export default HeaderText;