import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import Estilo from "../components/estilos";
import Reservas from "../components/Reservas";
import SearchIcon from "../components/SearchIcon";

export default (props) => {
  return (
    <ScrollView style={style.page}>
      <View style={style.header}>
        <View>
          <Text style={{ color: "#fff" }}></Text>
        </View>
        <Text style={Estilo.titulo}>Reservas</Text>
        <View style={{ width: 200 }}>
          <Text style={Estilo.subtitulo1}>Suas reservas nos restaurantes</Text>
        </View>
      </View>

      <View style={style.container}>
        <View style={style.inputContainer}>
          <View style={{ marginHorizontal: 20 }}>
            <SearchIcon />
          </View>
          <TextInput
            style={{ fontFamily: "Montserrat", fontSize: 10 }}
            placeholder="Pesquisar restaurantes                                                          "
          />
        </View>

        <View style={style.container2}>
          <Reservas
            title="Boteco do Manolo"
            adress="Estrada do Monteiro, 1200 - Campo Grande"
            stars={4.4}
            imagem="BotecoDoManolo"
          />
        </View>
      </View>
      <View />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    height: 300,
    backgroundColor: "#B53122",
  },
  container: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#8A2BE2",
  },
  tab: {
    flexDirection: "row",
    paddingTop: 5,
    marginVertical: 25,
    alignItems: "center",
  },
  botoes: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: 350,
    height: 40,
    borderRadius: 15,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
