import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Estilo from '../components/estilos'
import Rests from '../components/Rests'
import Botoes2 from '../components/Botoes2'
import { TextInput } from 'react-native-gesture-handler'
import SearchIcon from '../components/SearchIcon'

export default props => {
    
    return (
        <ScrollView style={style.page}>
            <ImageBackground source={require('../../assets/images/Background3.png')} style={{ height: 300 }}>
                <View style={style.header}>
                    <View><Text style={{ color: '#fff' }}></Text></View>
                    <Text style={Estilo.titulo}>Home</Text>
                    <View style={{ width: 200}}>
                        <Text style={Estilo.subtitulo1}>Onde você gostaria de reservar a sua mesa?</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={style.container}>
                <View style={style.inputContainer}>
                    <View style={{ marginHorizontal: 20 }}>
                        <SearchIcon />
                    </View>
                    <TextInput style={{ fontFamily: 'Montserrat', fontSize: 10 }} placeholder = 'Pesquisar restaurantes                                                          ' />
                </View>

                <View style={style.tab}>
                    <View style={style.botoes}>
                        <Botoes2 title='Todos' back='#B53122' color='#fff'/>
                        <Botoes2 title='Popular' />
                        <Botoes2 title='Próximos' />
                        <Botoes2 title='Recente' />
                    </View>
                </View>
                
                <View style={style.container2}>                   
                            <Rests 
                                title='Boteco do Manolo' 
                                adress='Estrada do Monteiro, 1200 - Campo Grande' 
                                stars={4.4}
                                imagem='BotecoDoManolo'
                            />
                            <Rests 
                                title='Restaurante Broz' 
                                adress='R. Marquês de Abrantes, 216 - Flamengo' 
                                stars={4}
                                imagem='RestauranteBroz'
                            />
                            <Rests 
                                title='Vikings Steaks & Sandwiches'
                                adress='R. Alm. João Cândido Brasil, 86 - Maracanã' 
                                stars={4}
                                imagem='Vikings'
                            />
                            <Rests 
                                title='Kimura Culinária Japonesa' 
                                adress='R. Gonzaga Bastos, 56 - Tijuca' 
                                stars={4}
                                imagem='Kimura'
                            />     
                            <Rests 
                                title='Turino Restaurante' 
                                adress='R. Santa Sofia, 114 - Tijuca' 
                                stars={4}
                                imagem='Turino'
                            />
                            <Rests 
                                title='Fogo de Chão' 
                                adress='Av. Repórter Nestor Moreira, s/n - Botafogo' 
                                stars={4}
                                imagem='Fogo'
                            />
                    
                </View>

            </View>
            <View />
        </ScrollView>
    )
}

const style=StyleSheet.create({
    page:{
         backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        height: 300,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#8A2BE2'
    },
    tab: {
        flexDirection: 'row',
        paddingTop: 5,
        marginVertical: 25,
        alignItems: "center",
    },
    botoes: {
        flexDirection: 'row',
        flex: 1, 
        justifyContent: 'space-evenly',
    },
    container2: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: "center",
        width: 350,
        height: 40,
        borderRadius: 15,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {	width: 0, height: 1},
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
})