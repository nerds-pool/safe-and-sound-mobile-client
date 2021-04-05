import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../theme/Colors";
import {
  StartScreen,
  SignupScreen,
  SigninScreen,
  HomeScreen,
  TestResultsScreen,
  SearchUserScreen,
  UserScreen,
  NewTestResultScreen,
} from "../screens";

const Stack = createStackNavigator();

const DEFAULT_STACK_NAVIGATION_OPTIONS = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  // headerTitleStyle: {
  //   fontFamily: Typography.displayHeavy.fontFamily,
  //   letterSpacing: Typography.displayHeavy.letterSpacing,
  // },
  headerTintColor: Colors.background,
};

const mainNavigator = (props) => {
  return props.isGuest ? (
    <Stack.Navigator screenOptions={{ ...DEFAULT_STACK_NAVIGATION_OPTIONS }}>
      <Stack.Screen
        name="start"
        component={StartScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{ title: "Sign Up" }}
      />
      <Stack.Screen
        name="signin"
        component={SigninScreen}
        options={{ title: "Sign In" }}
      />
    </Stack.Navigator>
  ) : props.isPHI ? (
    <Stack.Navigator screenOptions={{ ...DEFAULT_STACK_NAVIGATION_OPTIONS }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Safe&Sound" }}
      />
      <Stack.Screen
        name="search"
        component={SearchUserScreen}
        options={{ title: "Search Users" }}
      />
      <Stack.Screen
        name="user"
        component={UserScreen}
        options={{ title: "..." }}
      />
      <Stack.Screen
        name="test"
        component={NewTestResultScreen}
        options={{ title: "Add New Test Result" }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{ ...DEFAULT_STACK_NAVIGATION_OPTIONS }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Safe&Sound" }}
      />
      <Stack.Screen
        name="history"
        component={TestResultsScreen}
        options={{ title: "Tests Results History" }}
      />
    </Stack.Navigator>
  );
};

export default mainNavigator;
