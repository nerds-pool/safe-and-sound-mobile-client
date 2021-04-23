import React, { useContext } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import theme from "../../lib/theme";
import {
  StartScreen,
  SignupScreen,
  SigninScreen,
  HomeScreen,
  QrScannerScreen,
  CheckoutScreen,
  TestResultsScreen,
  SearchUserScreen,
  NewTestResultScreen,
} from "../screens";
import { GlobalContext } from "../context";

const Stack = createStackNavigator();

const DEFAULT_STACK_NAVIGATION_OPTIONS = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.background,
};

const mainNavigator = () => {
  const { userState } = useContext(GlobalContext);

  React.useEffect(() => {
    console.log("App Mode in main nav", userState.mode);
  }, [userState]);

  return (
    <Stack.Navigator screenOptions={{ ...DEFAULT_STACK_NAVIGATION_OPTIONS }}>
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
          title: "Safe&Sound",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="checkout"
        component={CheckoutScreen}
        options={{
          title: "Safe&Sound",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="history"
        component={TestResultsScreen}
        options={{
          title: "PCR/Antigen Results History",
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      {userState.mode === "phi" ? (
        <>
          <Stack.Screen
            name="search"
            component={SearchUserScreen}
            options={{
              title: "Search Users",
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="test"
            component={NewTestResultScreen}
            options={{
              title: "Submit Test Result",
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </>
      ) : (
        <></>
      )}
    </Stack.Navigator>
  );
};

export default mainNavigator;
