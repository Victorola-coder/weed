import React, { Children } from "react";
import { Text } from "react-native";

type TextProps = {
    className?: string;
    children?: React.ReactNode;
    color?: string;
}
const SubHeaderText = (props: TextProps) => {
    const { className, children, color } = props;
    return (
        <Text
            className={`${className} font-normal`}
            style={{
                textShadowColor: `${color}`,
                textShadowOffset: { width: -0.5, height: 0.5 },
                textShadowRadius: 0.5,
            }}
        >
            {children}
        </Text>
    );
};

export default SubHeaderText;