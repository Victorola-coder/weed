import { Logo } from '@/components/svg/Logo';
import { Colors } from '@/constants/Colors';
import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';

type ProfileImage = {
    image: any;
    isActive: boolean;
};

const ProfileImageGradient = (props: ProfileImage) => {
    const { image, isActive } = props;

    return (
        <View className='relative'>
            <View className="h-weed-5.3 w-weed-5.3 rounded-full">
                <ImageBackground
                    source={require("../../assets/image/profileGradient.png")}
                    className="h-full w-full p-1 justify-center items-center"
                >
                    <Image
                        source={typeof image === 'string' ? { uri: image } : image}
                        className="w-full h-full rounded-full"
                        resizeMode="cover"
                    />
                </ImageBackground>
            </View>
            {isActive && (
                <View className='absolute right-0 top-0 bg-weed-online rounded-3xl h-6 w-6 border border-white' />
            )}
        </View>

    );
};

export default ProfileImageGradient;
