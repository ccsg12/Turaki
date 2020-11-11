import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cadastro from "../Views/Cadastro";
import Login from "../Views/Login";
import Home from "../Views/Home";
import Load from "../Views/Load";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserIcon from "../components/UserIcon";
import Perfil from "../Views/Perfil";

const Stack = createStackNavigator();

export default (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat: require("../../assets/Font/Montserrat/Montserrat-Bold.ttf"),
    Montserrat1: require("../../assets/Font/Montserrat/Montserrat-Regular.ttf"),
    Raleway: require("../../assets/Font/Raleway/static/Raleway-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Load />;
  }

  return (
    <Stack.Navigator
      initialRouteName="TabNav"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Perfil"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return <Ionicons name="ios-home" size={size} color={color} />;
              break;
            case "Perfil":
              return <UserIcon size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#B53122",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};
