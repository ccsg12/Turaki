import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from '../Views/Cadastro'
import Login from '../Views/Login'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName= 'Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
    </Stack.Navigator>
)