import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { BlurView } from "expo-blur";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("../images/home_icon.png")
              : require("../images/home_n_icon.png");
          } else if (route.name === "Offer") {
            iconName = focused
              ? require("../images/offer_icon.png")
              : require("../images/offer_n_icon.png");
          } else if (route.name === "Cart") {
            iconName = focused
              ? require("../images/cart_icon.png")
              : require("../images/cart_n_icon.png");
          } else if (route.name === "Account") {
            iconName = focused
              ? require("../images/account_icon.png")
              : require("../images/account_n_icon.png");
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={styles.tabIcon} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Offer" component={HomeScreen} />
      <Tab.Screen name="Cart" component={HomeScreen} />
      <Tab.Screen name="Account" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});
