import React from 'react';
import { View, Text, Image } from 'react-native';

const VideoCall = ({ isUser, missed }: { isUser: boolean; missed?: boolean }) => {
    return (
        <View className={`my-2 w-5/6 rounded-xl p-3 ${isUser ? 'bg-weed-sendchat self-end' : 'bg-weed-recievechat self-start'}`}>
            <View className="flex-row items-center">
                <Image
                    source={require('../../../assets/image/videodenied.png')}
                    className="h-8 w-8 mr-2"
                    resizeMode="contain"
                />
                <Text className="font-inder text-md">
                    {missed ? "Missed Video Call" : "Video Call"}
                </Text>
            </View>
        </View>
    );
};

export default VideoCall;