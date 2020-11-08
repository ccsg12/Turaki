import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from '../Views/Cadastro'
import Login from '../Views/Login'
import Home from '../Views/Home'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName= 'Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
)