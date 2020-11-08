import React, { Component } from 'react';
import Login from './Views/Login';
import Cadastro from './Views/Cadastro'
import Home from './Views/Home'

export default class App extends Component {
  render() {
    return (
        <View>
          <Login />
          <Cadastro />
          <Home />
        </View>
    )
  }
}
