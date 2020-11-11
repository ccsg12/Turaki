import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Estilo from "../components/estilos";
import { TextInput } from "react-native-gesture-handler";
import Intersex from "../components/SexIcon";
import UserIcon from "../components/UserIcon";
import MailIcon from "../components/mailIcon";
import Icon from "react-native-vector-icons/Feather";
import WorldIcon from "../components/WorldIcon";
import BotaoPerfil from "../components/BotaoPerfil";

export default (props) => {
  return (
    <ScrollView style={style.page}>
      <ImageBackground
        source={require("../../assets/images/BackgroundPerfil.png")}
        style={{ height: 300 }}
      >
        <View style={style.header}>
          <Text style={Estilo.titulo}>Perfil</Text>
        </View>
      </ImageBackground>

      <View style={style.container}>
        <View style={style.inputContainer}>
          <View style={{ marginHorizontal: 20 }}>
            <UserIcon color="#999" />
          </View>
          <TextInput
            style={{ fontFamily: "Montserrat1" }}
            placeholder="Usuário                                              "
          />
        </View>
        <View style={style.inputContainer}>
          <View style={{ marginHorizontal: 20 }}>
            <MailIcon color="#999" />
          </View>
          <TextInput
            style={{ fontFamily: "Montserrat1" }}
            placeholder="usuario@email.com                          "
          />
        </View>
        <View style={style.inputContainer}>
          <View style={{ marginHorizontal: 20 }}>
            <Icon name="phone" color="#999" size={20} />
          </View>
          <TextInput
            style={{ fontFamily: "Montserrat1" }}
            placeholder="(99) 99999-9999                                      "
          />
        </View>
        <View style={style.inputContainer}>
          <View style={{ marginHorizontal: 20 }}>
            <Icon name="map-pin" color="#999" size={20} />
          </View>
          <TextInput
            style={{ fontFamily: "Montserrat1" }}
            placeholder="Rio de Janeiro                                              "
          />
        </View>
        <View style={style.inputContainer}>
          <View style={{ marginHorizontal: 20 }}>
            <WorldIcon color="#999" />
          </View>
          <TextInput
            style={{ fontFamily: "Montserrat1" }}
            placeholder="Português                                         "
          />
        </View>
        <View style={style.inputContainer}>
          <View style={{ marginHorizontal: 20 }}>
            <Intersex color="#999" />
          </View>
          <TextInput
            style={{ fontFamily: "Montserrat1" }}
            placeholder="Masculino                                                "
          />
        </View>
      </View>

      <View style={style.container2}>
        <BotaoPerfil title="Atualizar Perfil" width={200} />
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
    justifyContent: "center",
    padding: 20,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    height: 300,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  container2: {
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: 300,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomColor: "#999",
    borderBottomWidth: 2,
  },
});
