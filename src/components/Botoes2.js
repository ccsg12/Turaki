import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default props => {

    const style = [styles.container]
    if (props.back) style.push({ backgroundColor: props.back})

    const texto = [styles.label]

    if (props.color) texto.push({ color: props.color})


    return (
            <TouchableOpacity style={style}>
                <Text style={texto}>{props.title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {	width: 0, height: 1},
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    label: {
        fontSize: 12,
        fontFamily: 'Montserrat'
    }
})