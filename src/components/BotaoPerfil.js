import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderWidth: 1,
    borderColor: "#B53122",
  },
  label: {
    fontSize: 16,
    fontFamily: "Montserrat",
    color: "#B53122",
  },
});
