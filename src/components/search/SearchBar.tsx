import React from 'react';
import { View, TextInput, Image } from 'react-native';

const SearchBar = () => {
    return (
        <View className="flex-row w-full h-weed-2.5 items-center bg-gray-200 gap-2 p-2 rounded-[0.625rem] px-8">
            <Image source={require("../../../assets/image/search.png")} className='w-4 h-4'/>
            <TextInput
                placeholder="Search"
                placeholderTextColor="#ADADAD"
                placeholderClassName='font-inder font-normal text-base'
                className="flex-1 w-full p-1 text-black h-14 text-base font-inder font-normal"
            />
        </View>
    );
};

export default SearchBar;
