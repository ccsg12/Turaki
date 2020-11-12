import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Imagens from "./Imagens";

export default (props) => {
  const time = (
    <Text style={[styles.timeText, { color: "#B53122" }]}>35:00</Text>
  );
  const imagem = props.imagem;

  return (
    <View>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <View style={styles.foto}>
            <Imagens imagem={imagem} />
          </View>

          <View style={styles.container2}>
            <View>
              <Text style={styles.title}>{props.title}</Text>
            </View>

            <View style={styles.container3}>
              <Text style={styles.info}>{props.adress}</Text>
            </View>

            <View style={{ flex: 1.3 }}>
              <View style={styles.container3}>
                <Text style={styles.info}>Hora de chegada</Text>
                <Text style={styles.info}>18:00</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.info}>Hora de saída</Text>
                <Text style={styles.info}>20:00</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.info}>Número de pessoas</Text>
                <Text style={styles.info}>04</Text>
              </View>
              <View style={styles.container3}>
                <Text style={styles.info}>Ocasião</Text>
                <Text style={styles.info}>Jantar de família</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.timeLeft}>
        <Text style={styles.timeText}>
          Vamos guardar essa mesa por mais {time} minutos
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: 330,
    height: 160,
    borderRadius: 15,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    marginVertical: 10,
  },
  container2: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: "flex-start",
    marginVertical: 15,
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  foto: {
    borderRadius: 20,
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat",
    color: "#B53122",
  },
  info: {
    fontFamily: "Montserrat",
    fontSize: 9,
    color: "#666",
  },
  timeLeft: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 330,
    borderBottomWidth: 1,
    borderColor: "#999",
  },
  timeText: {
    fontFamily: "Montserrat",
    fontSize: 10,
  },
});
