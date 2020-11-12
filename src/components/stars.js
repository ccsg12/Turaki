import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet } from "react-native";

export default (props) => {
  let styles = [style.container];
  if (props.width) styles.push({ width: props.width });

  let cor = "#FFD700";
  if (props.color) cor = props.color;

  let tam = 12;
  if (props.size) tam = props.size;

  let Stars = (
    <View style={styles}>
      <Icon color={cor} size={tam} name="star-half-empty" />
      <Icon color={cor} size={tam} name="star-o" />
      <Icon color={cor} size={tam} name="star-o" />
      <Icon color={cor} size={tam} name="star-o" />
      <Icon color={cor} size={tam} name="star-o" />
    </View>
  );

  if (props.stars > 0.5 && props.stars <= 1) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
      </View>
    );
  }

  if (props.stars > 1 && props.stars <= 1.5) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star-half-empty" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
      </View>
    );
  }

  if (props.stars > 1.5 && props.stars <= 2) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
      </View>
    );
  }

  if (props.stars > 2 && props.stars <= 2.5) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star-half-empty" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
      </View>
    );
  }

  if (props.stars > 2.5 && props.stars <= 3) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star-o" />
        <Icon color={cor} size={tam} name="star-o" />
      </View>
    );
  }

  if (props.stars > 3 && props.stars <= 3.5) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star-half-empty" />
        <Icon color={cor} size={tam} name="star-o" />
      </View>
    );
  }

  if (props.stars > 3.5 && props.stars <= 4) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star-o" />
      </View>
    );
  }

  if (props.stars > 4 && props.stars <= 4.5) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star-half-empty" />
      </View>
    );
  }

  if (props.stars > 4.5 && props.stars <= 5) {
    Stars = (
      <View style={styles}>
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
        <Icon color={cor} size={tam} name="star" />
      </View>
    );
  }

  return Stars;
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 60,
  },
});
