import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default props => {

    // const avancar = () => props.navigation.navigate('Login')
    // setTimeout(avancar, 2000)

    return (
        <View style={style.page}>
            <Image source={require('../../assets/images/Logos/TurakiPintado2.png')} />
        </View>
    )
            
}

const style=StyleSheet.create({
    page:{
        backgroundColor: '#D2B48C',
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
    },
})