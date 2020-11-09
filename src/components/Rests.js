import React from 'react'
import { StyleSheet ,Text, TouchableWithoutFeedback, View, ImageBackground } from 'react-native'
import Stars from './stars'
import Imagens from './Imagens'

export default props => {

    const stars = <Stars stars={props.stars} />
    const imagem = props.imagem

    return(
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Imagens imagem={imagem} />
                <View style={{ paddingHorizontal: 5, height: 30}}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                <View style={styles.container2}>
                    <View style={{ flex:1, padding: 5 }}>
                        <Text style={styles.adress}>{props.adress}</Text>
                    </View>
                    <View style={{ width: 60, padding: 5}}>
                        <Text>{stars}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: 160,
        height: 180,
        borderRadius: 10,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: {	width: 0, height: 1},
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
    },
    container2: {
        flexDirection: 'row',
        paddingHorizontal: 5,
    },
    foto: {
        borderRadius: 10,
        height: 100,
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
    },
    adress: {
        fontSize: 10,
        color: '#666',
    }
})