import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {

    const style = [styles.container]
    if (props.back) style.push({ backgroundColor: props.back})
    if (props.width) style.push({ width: props.width})
    if (props.height) style.push({ height: props.height})

    const texto = [styles.label]
    if (props.color) texto.push({ color: props.color})
    if (props.fontSize) texto.push({ fontSize: props.fontSize })
    
    const title = props.title === 'Home' ?  <Icon name="arrow-right" size={18} /> : props.title

    return (
            <TouchableOpacity style={style} onPress = {function() { return (props.onClick(props.title))}}>
                <Text style={texto}>{title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
    }
})