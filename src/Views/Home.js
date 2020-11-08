import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Estilo from '../components/estilos'
import Botoes from '../components/Botoes'
import Rests from '../components/Rests'

export default props => {
    
    return (
        <ScrollView style={style.page}>
            
            <View style={{ height: 200 }}>
                <View style={style.header}>
                    <View><Text>Aqui vai o drawer</Text></View>
                    <Text style={Estilo.titulo}>Home</Text>
                    <View style={{ width: 200}}>
                        <Text style={Estilo.subtitulo1}>Onde você gostaria de reservar a sua mesa?</Text>
                    </View>
                </View>
            </View>

            <View style={style.container}>
                <Text>Aqui vai a Busca!!!!!</Text>
                <View style={{ flexDirection: 'row', height: 30, backgroundColor: 'cyan'}}>
                    <View style={style.botoes}>
                        <Botoes title='Todos' width={80} height={30} fontSize={12}/>
                        <Botoes title='Popular' width={80} height={30} fontSize={12}/>
                        <Botoes title='Próximos' width={80} height={30} fontSize={12}/>
                        <Botoes title='Recente' width={80} height={30} fontSize={12}/>
                    </View>
                </View>
                
                <View style={style.container2}>
                    <View style={style.container3}>
                        <View style={style.container4}>
                            <Rests title='Turino Restaurante'/>
                        </View>
                        <View>
                            <Rests title='Restaurante Broz'/>
                        </View>
                    </View>
                    <View style={style.container3}>
                        <View style={style.container4}>
                            <Rests title='Vikings & Steak Sandwiches'/>
                        </View>
                        <View>
                            <Rests title='Fogo de chão'/>
                        </View>
                    </View>
                    <View style={style.container3}>
                        <View style={style.container4}>
                            <Rests title='Boteco do Manolo'/>
                        </View>
                        <View>
                            <Rests title='Kimura Culinária Japonesa'/>
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
        backgroundColor: '#eee',
    },
    header: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        backgroundColor: '#8B4513'
    },
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#8A2BE2'
    },
    botoes:{
        flexDirection: 'row',
        flex: 1, 
        justifyContent: 'space-between',
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