import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

export default props => {

    return(
        <View style={styles.container}>
            <View style={styles.foto}/>
            <View style={{ padding: 5}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: 160,
        height: 180,
        borderRadius: 10,
    },
    foto: {
        borderRadius: 10,
        backgroundColor: 'cyan',
        height: 100,
    },
    title: {
        fontSize: 14,
    }
})