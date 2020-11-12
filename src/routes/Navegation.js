import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import Cadastro from "../Views/Cadastro";
import Login from "../Views/Login";
import Home from "../Views/Home";
import Load from "../Views/Load";
import Reservations from "../Views/Reservations";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserIcon from "../components/UserIcon";
import Perfil from "../Views/Perfil";
import Boteco from "../Views/Boteco";

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
      <Stack.Screen name="Boteco" component={Boteco} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Home":
              return <Ionicons name="ios-home" size={size} color={color} />;
            case "Perfil":
              return <UserIcon size={size} color={color} />;
            case "Reservations":
              return <Ionicons name="ios-calendar" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#B53122",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Reservations" component={Reservations} />
      <Tab.Screen name="Perfil" component={Perfil} />
      {/* <Tab.Screen name="Boteco" component={Boteco} /> */}
    </Tab.Navigator>
  );
};
