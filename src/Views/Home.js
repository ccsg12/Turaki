import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Estilo from '../components/estilos'
import Botoes from '../components/Botoes'
import Rests from '../components/Rests'

export default props => {
    
    return (
        <ScrollView style={style.page}>
            <ImageBackground source={require('../../assets/images/Background3.png')} style={{ height: 300 }}>
                <View style={style.header}>
                    <View><Text style={{ color: '#fff' }}>Aqui vai o drawer</Text></View>
                    <Text style={Estilo.titulo}>Home</Text>
                    <View style={{ width: 200}}>
                        <Text style={Estilo.subtitulo1}>Onde você gostaria de reservar a sua mesa?</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={style.container}>
                <Text>Aqui vai a Busca!!!!!</Text>
                <View style={style.tab}>
                    <View style={style.botoes}>
                        <Botoes title='Todos' width={80} height={30} fontSize={12} shadow/>
                        <Botoes title='Popular' width={80} height={30} fontSize={12}/>
                        <Botoes title='Próximos' width={80} height={30} fontSize={12}/>
                        <Botoes title='Recente' width={80} height={30} fontSize={12}/>
                    </View>
                </View>
                
                <View style={style.container2}>
                    <View style={style.container3}>
                        <View style={style.container4}>
                            <Rests 
                                title='Boteco do Manolo' 
                                adress='Estrada do Monteiro, 1200 - Campo Grande' 
                                stars={4.4}
                                imagem='BotecoDoManolo'
                            />
                        </View>
                        <View>
                            <Rests 
                                title='Restaurante Broz' 
                                adress='R. Marquês de Abrantes, 216 - Flamengo' 
                                stars={4}
                                imagem='RestauranteBroz'
                            />
                        </View>
                    </View>
                    <View style={style.container3}>
                        <View style={style.container4}>
                            <Rests 
                                title='Vikings Steaks & Sandwiches'
                                adress='R. Alm. João Cândido Brasil, 86 - Maracanã' 
                                stars={4}
                                imagem='Vikings'
                            />
                        </View>
                        <View>
                            <Rests 
                                title='Kimura Culinária Japonesa' 
                                adress='R. Gonzaga Bastos, 56 - Tijuca' 
                                stars={4}
                                imagem='Kimura'
                            />
                        </View>
                    </View>
                    <View style={style.container3}>
                        <View style={style.container4}>
                            <Rests 
                                title='Turino Restaurante' 
                                adress='R. Santa Sofia, 114 - Tijuca' 
                                stars={4}
                                imagem='Turino'
                            />
                        </View>
                        <View>
                            <Rests 
                                title='Fogo de Chão' 
                                adress='Av. Repórter Nestor Moreira, s/n - Botafogo' 
                                stars={4}
                                imagem='Fogo'
                            />
                        </View>
                    </View>
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
        // backgroundColor: '#eee',
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
        // backgroundColor: 'cyan',
        alignItems: "center",
    },
    botoes:{
        flexDirection: 'row',
        flex: 1, 
        justifyContent: 'space-evenly',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container3: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
    },
    container4: {
        flex: 1,
    }
})