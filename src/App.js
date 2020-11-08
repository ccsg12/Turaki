import React, { Component } from 'react';
import Login from './Views/Login';
import Cadastro from './Views/Cadastro'

export default class App extends Component {
  render() {
    return (
        <View>
          <Login />
          <Cadastro />
        </View>
    )
  }
}
