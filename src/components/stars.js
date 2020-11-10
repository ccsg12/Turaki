import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, StyleSheet } from 'react-native'

export default props => {

let Stars = <View style={style.container}><Icon color='#FFD700' name='star-half-empty'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/></View>

if (props.stars > 0.5 && props.stars <= 1) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/></View>
}

if (props.stars > 1 && props.stars <= 1.5) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star-half-empty'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/></View>
}

if (props.stars > 1.5 && props.stars <= 2) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/></View>
}

if (props.stars > 2 && props.stars <= 2.5) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star-half-empty'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/></View>
}

if (props.stars > 2.5 && props.stars <= 3) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star-o'/><Icon color='#FFD700' name='star-o'/></View>
}

if (props.stars > 3 && props.stars <= 3.5) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star-half-empty'/><Icon color='#FFD700' name='star-o'/></View>
}

if (props.stars > 3.5 && props.stars <= 4) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star-o'/></View>
}

if (props.stars > 4 && props.stars <= 4.5) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star-half-empty'/></View>
}

if (props.stars > 4.5 && props.stars <= 5) {
    Stars = <View style={style.container}><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/><Icon color='#FFD700' name='star'/></View>
}
    
    return Stars
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 60,
    }
})