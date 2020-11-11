import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navegation from "./Navegation";

export default class Navegacao extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Navegation />
        </NavigationContainer>
      </View>
    );
  }
}
