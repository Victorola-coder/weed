import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
    children: React.ReactNode
    className?: string
    onPress: () => void
}
const CustomButton = (props: Props) => {
    const { children, onPress, className } = props
    return (
        <TouchableOpacity onPress={onPress} className={`${className} h-14 items-center justify-center`}>
            {children}
        </TouchableOpacity>
    )
}

export default CustomButton
