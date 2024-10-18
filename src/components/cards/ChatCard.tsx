import { ChatCardProps } from "@/data/list";
import ProfileImageGradient from "@/layouts/ProfileImageGradient";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const ChatCard = (props: ChatCardProps) => {
    const { onPress, image, name, message, time, unreadCount, isOnline } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View className="w-full flex-row justify-between items-center h-weed-5.3">
                <View className="gap-4 flex-row items-center">
                    <ProfileImageGradient image={image} isActive={isOnline} />
                    <View className="flex-col gap-2">
                        <Text className="font-inder font-bold text-weed-primary-100 text-lg">{name}</Text>
                        <Text className="font-inder font-normal text-weed-black text-base">{message}</Text>
                    </View>
                </View>
                <View className="flex-col gap-2 items-center w-16">
                    <Text className="text-weed-primary-100 text-base font-inder font-normal text-xs">{time}</Text>
                    {unreadCount > 0 ? (
                        <View className="rounded-3xl bg-weed-primary-100 w-6 h-6 justify-center items-center">
                            <Text className="font-inder font-normal text-white text-xs">{unreadCount}</Text>
                        </View>
                    ) : (
                        <Image
                            source={require("../../../assets/image/unchecked.png")}
                            className="w-6 h-6"
                        />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default ChatCard;