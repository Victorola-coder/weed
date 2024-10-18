import { Logo } from '@/components/svg/Logo'
import { Colors } from '@/constants/Colors'
import { HEADERHEIGHT } from '@/constants/Size'
import { MainFilterProps } from '@/routes/types'
import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

const HomeHeader = ({ navigation, route }: MainFilterProps) => {

    const HandleNavigation = () => {
        navigation.navigate('main-filter')
    }
    const HandleQRCodeNavigation = () => {
        navigation.navigate("weed-key")
    }

    return (
        <View className='w-full flex-row items-center justify-between px-5 pt-10' style={{ height: HEADERHEIGHT }}>
            <TouchableOpacity onPress={HandleQRCodeNavigation}>
                <Image source={require("../../assets/image/qrcode.png")} className='h-6 w-6' resizeMode='contain' />
            </TouchableOpacity>
            <View className="flex-row items-start justify-center gap-2">
                <Logo color={Colors["weed-primary"][100]} width="27" height="27" />
                <Text className="text-weed-primary-100 text-4xl font-italianno font-normal" style={{
                    textShadowColor: '#00500D',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 1,
                }}>
                    Weed Match
                </Text>
            </View>
            <TouchableOpacity onPress={HandleNavigation}>
                <Image source={require("../../assets/image/filter.png")} className='h-7 w-7' resizeMode='contain' />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader;
