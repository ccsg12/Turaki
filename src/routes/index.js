import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'

export default class Navegacao extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <NavigationContainer>
                    <Stack />
                </NavigationContainer>
            </View>
        )
    }
}