import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import Estilo from '../components/estilos'
import Botoes from '../components/Botoes'
import UserIcon from '../components/UserIcon'
import LockIcon from '../components/LockIcon'

export default props => {
    
    const avancar = a => props.navigation.navigate(a)

    return (
        <ImageBackground source={require('../../assets/images/Background1.png')} style={style.page}>
            
            <View style={{ flex: 1.2 }}/>
            <View style={{ marginHorizontal: 20, }}>
                <Text style={[Estilo.titulo, { color: '#fff' }]}>Login</Text>
            </View>

            <ImageBackground source={require('../../assets/images/Background2.png')} style={style.container}>

                <View style={style.container2}>
                    <View style={{ marginBottom: 20, alignItems: 'center'}}>
                        <Text style={[Estilo.subtitulo, style.text]}>Bem vindo!</Text>
                        <Text style={[Estilo.subtitulo2, { color: '#B53122' }]}>Adoraríamos tê-lo conosco novamente</Text>
                    </View>
                        
                    <View>
                        <View style={style.inputContainer}>
                            <View style={{ marginHorizontal: 20 }}>
                                <UserIcon color='#B53122' />
                            </View>
                            <TextInput style={{ fontFamily: 'Montserrat1' }} placeholder = 'Usuário                                              ' />
                        </View>
                        <View style={style.inputContainer}>
                            <View style={{ marginHorizontal: 20 }}>
                                <LockIcon color='#B53122'/>
                            </View>
                            <TextInput style={{ fontFamily: 'Montserrat1' }} placeholder = '************                                      ' />
                        </View>
                    </View>
                
                    <View style={{ marginVertical: 10 }}>
                        <Botoes title='Home' color='#fff' back='#B53122' width={100} height={35} onClick={avancar}/>
                    </View>
                </View >

            </ImageBackground>

            <View style={{ flex: 1 }}/>
            <View style={style.botoes}>
                <Botoes title='Login' color='#fff' back='#B53122' onClick={avancar}/>
                <Botoes title='Cadastro' color='#00BA40' onClick={avancar}/>
            </View>
        </ImageBackground>
    )
}

const style=StyleSheet.create({
    page:{
        flex: 1,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 415,
    },
    container2: {
        padding: 10,
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        color: '#B53122',

    },
    botoes:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: "center",
        width: 280,
        height: 40,
        borderRadius: 5,
        margin: 5
    },
})