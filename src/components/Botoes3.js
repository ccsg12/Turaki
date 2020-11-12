import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default (props) => {
  const style = [styles.container];
  if (props.back) style.push({ backgroundColor: props.back });

  const texto = [styles.label];
  if (props.color) texto.push({ color: props.color });

  return (
    <TouchableOpacity style={style}>
      <Text style={texto}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  label: {
    fontSize: 10,
    fontFamily: "Montserrat",
    color: "gray",
  },
});
