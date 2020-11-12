import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default (props) => {
  const beerIcon = <Ionicons name="ios-beer" size={20} color={props.color} />;

  return beerIcon;
};
