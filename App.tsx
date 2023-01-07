// import { View, Text } from 'react-native'
import React from "react";
import LandingScreen from "./src/screens/LandingScreen";
import BottomNavigator from "./src/navigators/BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigators/Navigation";

const App = () => {
  return (
    <NavigationContainer>
    <Navigation/>
    </NavigationContainer>
  );
};

export default App;
