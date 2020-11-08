import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Estilo from '../components/estilos'
import Botoes from '../components/Botoes'

export default props => {
    
    const avancar = a => props.navigation.navigate(a)
    
    return (
        <View style={style.page}>
            
            <View style={{ flex: 2.5 }}/>
            <View style={{ marginHorizontal: 20, }}>
                <Text style={[Estilo.titulo, { color: '#fff'}]}>Login</Text>
            </View>

            <View style={style.container}>
                <View style={{ flex: 3}}>
                </View>
                <Text style={[Estilo.subtitulo, style.text]}>Bem vindo!</Text>
                <Text>Adoraríamos tê-lo conosco novamente</Text>

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
                    <Botoes title='Home' color='#fff' back='#8A2BE2' width={110} height={40} onClick={avancar}/>
                </View>
            </View>
            <View style={{ flex: 1 }}/>
            <View style={style.botoes}>
                <Botoes title='Login' color='#fff' back='#8A2BE2' onClick={avancar}/>
                <Botoes title='Cadastro' color='#3CB371' onClick={avancar}/>
            </View>
        </View>
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
        height: 390,
    },
    text: {
        color: '#8A2BE2'
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