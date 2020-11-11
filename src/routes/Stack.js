import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from '../Views/Cadastro'
import Login from '../Views/Login'
import Home from '../Views/Home'
import Load from '../Views/Load'
import { useFonts } from 'expo-font'

const Stack = createStackNavigator()

export default props => {

    let [fontsLoaded] = useFonts({
        Montserrat: require('../../assets/Font/Montserrat/Montserrat-Bold.ttf'),
        Montserrat1: require('../../assets/Font/Montserrat/Montserrat-Regular.ttf'),
        Raleway: require('../../assets/Font/Raleway/static/Raleway-SemiBold.ttf'),
    })
    
    if (!fontsLoaded) {
            return <Load />
    }

    return(
        <Stack.Navigator initialRouteName= 'Cadastro' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Load' component={Load} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}
