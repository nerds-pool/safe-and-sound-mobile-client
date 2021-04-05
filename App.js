import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/mainNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainNavigation isGuest={true} isPHI={false} />
    </NavigationContainer>
  );
}
