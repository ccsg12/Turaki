import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Estilo from "../components/estilos";
import BotaoPerfil from "../components/BotaoPerfil";
import { TextInput } from "react-native-gesture-handler";
import SearchIcon from "../components/SearchIcon";
import MapPinIcon from "../components/MapPinIcon";
import BeerIcon from "../components/BeerIcon";
import Stars from "../components/stars";
import Botoes3 from "../components/Botoes3";

export default (props) => {
  return (
    <ScrollView style={style.page}>
      <ImageBackground
        source={require("../../assets/images/BotecoDoManoloG.png")}
        style={{ height: 300 }}
      >
        <View style={style.header}>
          <View>
            <Text style={{ color: "#fff" }}></Text>
          </View>
          <Text style={Estilo.titulo}>Boteco do Manolo</Text>
          <View style={style.info}>
            <View style={{ width: 30 }}>
              <MapPinIcon color="rgba(255,255,255,0.2)" />
            </View>
            <Text style={[Estilo.normal, { color: "#fff" }]}>
              Estrada do Monteiro, 1200 - Campo Grande
            </Text>
          </View>
          <View style={style.info}>
            <View style={{ width: 30 }}>
              <BeerIcon color="rgba(255,255,255,0.2)" />
            </View>
            <Text style={[Estilo.normal, { color: "#fff" }]}>Bar</Text>
          </View>
          <View style={style.info}>
            <Stars color="#fff" width={100} size={20} stars={4.4} />
            <Text style={[Estilo.normal, { color: "#fff" }]}>4.4/5</Text>
          </View>
        </View>
      </ImageBackground>

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

        <View style={style.tab}>
          <View style={style.botoes}>
            <Botoes3 title="Localização" />
            <Botoes3 title="Galeria" />
            <Botoes3 title="Menu" />
            <Botoes3 title="Reserva" color="#B53122" />
            <Botoes3 title="Reviews" />
          </View>
        </View>

        <View style={style.container2}>
          <View style={style.inputContainer2}>
            <TextInput placeholder="Nome" />
          </View>
          <View style={style.inputContainer2}>
            <TextInput placeholder="Sobrenome" />
          </View>
          <View style={style.inputContainer1}>
            <TextInput placeholder="Email" />
          </View>
          <View style={style.inputContainer2}>
            <TextInput placeholder="Telefone" />
          </View>
          <View style={style.inputContainer2}>
            <TextInput placeholder="Ocasião" />
          </View>
          <View style={style.inputContainer2}>
            <TextInput placeholder="Chegada" />
          </View>
          <View style={style.inputContainer2}>
            <TextInput placeholder="Data" />
          </View>
          <View style={style.inputContainer2}>
            <TextInput placeholder="Saída" />
          </View>
          <View style={style.inputContainer2}>
            <TextInput placeholder="Membros" />
          </View>
          <View style={style.inputContainer1}>
            <TextInput placeholder="Desconto" />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <BotaoPerfil title="Reserve já" width={200} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    height: 300,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
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
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    paddingVertical: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
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
  inputContainer1: {
    justifyContent: "center",
    paddingHorizontal: 5,
    width: 260,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },
  inputContainer2: {
    justifyContent: "center",
    paddingHorizontal: 5,
    width: 120,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
  },
});
