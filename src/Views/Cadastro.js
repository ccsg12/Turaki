import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import Estilo from '../components/estilos'
import Botoes from '../components/Botoes'
import Icon from 'react-native-vector-icons/FontAwesome'
import MailIcon from '../components/mailIcon'
import LockIcon from '../components/LockIcon'
import UserIcon from '../components/UserIcon'

export default props => {
    
    const avancar = a => props.navigation.navigate(a)

    const googlePlus = <Icon name="arrow-right" size={18} />
    
    return (
        <ImageBackground source={require('../../assets/images/Background1.png')} style={style.page}>
            
            <View style={{ flex: 1.2 }}/>
            <View style={{ marginHorizontal: 20, }}>
                <Text style={[Estilo.titulo, { color: '#fff' }]}>Cadastro</Text>
            </View>

            <View style={style.container}>

                <Text style={[Estilo.subtitulo, style.text ]}>Junte-se a nós!</Text>
                <Text style={[Estilo.subtitulo2, { color: '#00BA40' }]} >Adoraríamos tê-lo conosco</Text>

                <View style={style.icons}>
                    <Icon name="google-plus-square" size={40} color='#B53122' />
                    <Icon name="facebook-square" size={40} color='#2680EB'/>
                </View>

                <Text style={[Estilo.normal, { color: '#B53122' }]}>Temos diversas opções de cadastro</Text>
                <ImageBackground source={require('../../assets/images/Logos/LogoParteDireita.png')} style={style.backImage}>
                    <View style={{ flex: 3, justifyContent: 'center' }}>
                        <View style={style.inputContainer}>
                            <View style={{ marginHorizontal: 20 }}>
                                <UserIcon color='#B53122' />
                            </View>
                            <TextInput style={{ fontFamily: 'Montserrat1' }} placeholder = 'Usuário                                              '></TextInput>
                        </View>
                        <View style={style.inputContainer}>
                            <View style={{ marginHorizontal: 20 }}>
                                <MailIcon color='#B53122' />
                            </View>
                            <TextInput style={{ fontFamily: 'Montserrat1' }} placeholder = 'usuario@email.com                          '></TextInput>
                        </View>
                        <View style={style.inputContainer}>
                            <View style={{ marginHorizontal: 20 }}>
                                <LockIcon color='#B53122'/>
                            </View>
                            <TextInput style={{ fontFamily: 'Montserrat1' }} placeholder = '************                                      '></TextInput>
                        </View>
                    </View>
                
                    <View style={{ flex: 1 }}>
                        <Botoes title='Home' color='#fff' back='#00BA40' width={110} height={40} onClick={avancar}/>
                    </View>
                </ImageBackground>
            </View>
            
            <View style={{ flex: 1 }}/>
            <View style={style.botoes}>
                <Botoes title='Login' color='#ff0000' onClick={avancar}/>
                <Botoes title='Cadastro' color='#fff' back='#00BA40' onClick={avancar}/>
            </View>
        </ImageBackground>
    )
}

const style=StyleSheet.create({
    page:{
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 415,
    },
    backImage: {
        flex: 1,
        alignItems: 'center',

    },
    text: {
        color: '#00BA40',
        marginTop: 10,
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
        marginHorizontal: 27.5,
        marginVertical: 5, 
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 200,
        marginVertical: 10,
    }
})