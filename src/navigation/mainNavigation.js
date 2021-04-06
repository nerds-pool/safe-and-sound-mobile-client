import React, { useContext } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Colors from "../theme/Colors";
import {
  StartScreen,
  SignupScreen,
  SigninScreen,
  HomeScreen,
  QrScannerScreen,
  TestResultsScreen,
  SearchUserScreen,
  UserScreen,
  NewTestResultScreen,
} from "../screens";
import AppContext from "../context";

const Stack = createStackNavigator();

const DEFAULT_STACK_NAVIGATION_OPTIONS = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.background,
};

const mainNavigator = (props) => {
  const { appMode } = useContext(AppContext);

  React.useEffect(() => console.log("App Mode in main nav", appMode), [
    appMode,
  ]);

  return props.isGuest ? (
    <Stack.Navigator
      screenOptions={{
        ...DEFAULT_STACK_NAVIGATION_OPTIONS,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="start"
        component={StartScreen}
        options={{
          title: "",
          headerTransparent: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{ title: "Sign Up", ...TransitionPresets.SlideFromRightIOS }}
      />
      <Stack.Screen
        name="signin"
        component={SigninScreen}
        options={{ title: "Sign In", ...TransitionPresets.SlideFromRightIOS }}
      />
    </Stack.Navigator>
  ) : appMode === "phi" ? (
    <Stack.Navigator screenOptions={{ ...DEFAULT_STACK_NAVIGATION_OPTIONS }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Safe&Sound",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="scanner"
        component={QrScannerScreen}
        options={{
          title: "Check In",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="search"
        component={SearchUserScreen}
        options={{
          title: "Search Users",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="user"
        component={UserScreen}
        options={{ title: "...", ...TransitionPresets.SlideFromRightIOS }}
      />
      <Stack.Screen
        name="test"
        component={NewTestResultScreen}
        options={{
          title: "Add New Test Result",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{ ...DEFAULT_STACK_NAVIGATION_OPTIONS }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Safe&Sound",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="scanner"
        component={QrScannerScreen}
        options={{
          title: "Check In",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="history"
        component={TestResultsScreen}
        options={{
          title: "Tests Results History",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default mainNavigator;
