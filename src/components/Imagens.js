import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export default props => {

    const restaurante = props.imagem
    let Imagem = <ImageBackground source={require('../../assets/images/BotecoDoManolo.png')} style={style.foto}/>

    if (restaurante == 'BotecoDoManolo') {
        Imagem = <ImageBackground source={require('../../assets/images/BotecoDoManolo.png')} style={style.foto}/>
    }

    if (restaurante == 'RestauranteBroz') {
        Imagem = <ImageBackground source={require('../../assets/images/RestauranteBroz.png')} style={style.foto}/>
    }

    if (restaurante == 'Vikings') {
        Imagem = <ImageBackground source={require('../../assets/images/Vikings.png')} style={style.foto}/>
    }

    if (restaurante == 'Kimura') {
        Imagem = <ImageBackground source={require('../../assets/images/Kimura.png')} style={style.foto}/>
    }

    if (restaurante == 'Turino') {
        Imagem = <ImageBackground source={require('../../assets/images/Turino.png')} style={style.foto}/>
    }

    if (restaurante == 'Fogo') {
        Imagem = <ImageBackground source={require('../../assets/images/Fogo.png')} style={style.foto}/>
    }

    return Imagem
}

const style = StyleSheet.create({
    foto: {
        borderRadius: 10,
        height: 100,
        width: 160,
    },
})