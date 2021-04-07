import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/mainNavigation";
import AppContext from "./src/context";
import appReducer from "./src/context/reducer";
import { SET_APP_TO_PHI_MODE } from "./src/context/actions.types";

export default function App() {
  const [appMode, dispatchAppMode] = useReducer(appReducer, "");

  useEffect(() => {
    dispatchAppMode({
      type: SET_APP_TO_PHI_MODE,
      payload: "phi",
    });
  }, [dispatchAppMode, SET_APP_TO_PHI_MODE]);

  return (
    <AppContext.Provider value={{ appMode, dispatchAppMode }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainNavigation isGuest={true} />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
