import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useSelector } from 'react-redux'
import { colors } from '../../constants'


const TabBarIcon = ({name}) => {

    const isDarkMode = useSelector(state => state.system.isDarkMode)
    const color = isDarkMode? colors.white : colors.black

    return <Icon name={name} color={color} size={23} />
}

export const PlusIcon = ({name,onPress}) => {
    const isDarkMode = useSelector(state => state.system.isDarkMode)

    return <Icon name={name} color={colors.dark_salmon} size={25} onPress={onPress} />
}

export default TabBarIcon;