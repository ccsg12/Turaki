import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import Estilo from '../components/estilos'
import Botoes from '../components/Botoes'

export default props => {
    
    const avancar = a => props.navigation.navigate(a)

    return (
        <ImageBackground source={require('../../assets/images/Background1.png')} style={style.page}>
            
            <View style={{ flex: 2.5 }}/>
            <View style={{ marginHorizontal: 20, }}>
                <Text style={[Estilo.titulo, { color: '#fff'}]}>Login</Text>
            </View>

            <ImageBackground source={require('../../assets/images/Background2.png')} style={style.container}>
                <View style={{ flex: 3}}>
                </View>
                <Text style={[Estilo.subtitulo, style.text]}>Bem vindo!</Text>
                <Text styles={[Estilo.normal, { color: '#6644CC'}]}>Adoraríamos tê-lo conosco novamente</Text>

                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <View style={style.inputContainer}>
                        <TextInput 
                            placeholder = 'Usuário ou Email                                                                                                 '
                        />
                    </View>
                    <View style={style.inputContainer}>
                        <TextInput placeholder = '************                                                                                               '
                    />
                    </View>
                </View>
            
                <View style={{ flex: 1 }}>
                    <Botoes title='Home' color='#fff' back='#6644CC' width={100} height={35} onClick={avancar}/>
                </View>
            </ImageBackground>

            <View style={{ flex: 1 }}/>
            <View style={style.botoes}>
                <Botoes title='Login' color='#fff' back='#6644CC' onClick={avancar}/>
                <Botoes title='Cadastro' color='#00BA40' onClick={avancar}/>
            </View>
        </ImageBackground>
    )
}

const style=StyleSheet.create({
    page:{
        backgroundColor: '#8B4513',
        flex: 1,
    },
    container: {
        padding: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 415,
    },
    text: {
        color: '#6644CC'
    },
    botoes:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: 280,
        height: 40,
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
})