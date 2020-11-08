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
                <Text style={[Estilo.titulo, { color: '#fff'}]}>Cadastro</Text>
            </View>

            <View style={style.container}>

                <Text style={[Estilo.subtitulo, style.text]}>Junte-se a nós!</Text>
                <Text >Adoraríamos tê-lo conosco</Text>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic'}}>Aqui vão os icons!!!</Text>
                </View>

                <Text style={{ fontStyle: 'italic' }}>Temos diversas opções de cadastro</Text>

                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <View style={style.inputContainer}>
                        <TextInput placeholder = 'Usuário                                                                                                    '></TextInput>
                    </View>
                    <View style={style.inputContainer}>
                        <TextInput placeholder = 'usuario@email.com                                                                                                         '></TextInput>
                    </View>
                    <View style={style.inputContainer}>
                        <TextInput placeholder = '************                                                                                               '></TextInput>
                    </View>
                </View>
            
                <View style={{ flex: 1 }}>
                    <Botoes title='Home' color='#fff' back='#00BA40' width={110} height={40} onClick={avancar}/>
                </View>
            </View>
            <View style={{ flex: 1 }}/>
            <View style={style.botoes}>
                <Botoes title='Login' color='#6644CC' onClick={avancar}/>
                <Botoes title='Cadastro' color='#fff' back='#00BA40' onClick={avancar}/>
            </View>
        </ImageBackground>
    )
}

const style=StyleSheet.create({
    page:{
        backgroundColor: '#8B4513',
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        padding: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 415,
    },
    text: {
        color: '#00BA40',
        marginTop: 10,
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