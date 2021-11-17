import React, {useMemo} from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { colors } from '../../constants';

export default function CustomView(props) {

    const isDark = useSelector(state => state.system.isDarkMode)

    
    const containerStyle = useMemo(() => {
        const styles = {
            backgroundColor: 
            isDark ? 
            colors.black : 
            colors.white,
            ...props.style}
            return styles
    },[props,isDark])



    return (
        <View style={containerStyle} >
          
                {props.children}
                
        </View>
    )
}
