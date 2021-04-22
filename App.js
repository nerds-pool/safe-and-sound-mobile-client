import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/mainNavigation";
import { GlobalProvider } from "./src/context";

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainNavigation />
      </NavigationContainer>
    </GlobalProvider>
  );
}
