import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import theme from "../../theme";
import Screen from "../../components/ui/Screen";
import BigButton from "../../components/ui/BigButton";

const signinScreen = (props) => {
  return (
    <Screen>
      <TextInput style={theme.styles.txtInput} placeholder="NIC Number" />
      <TextInput
        style={theme.styles.txtInput}
        placeholder="Password"
        secureTextEntry
      />
      <BigButton
        style={{ ...theme.styles.btn, ...styles.btn }}
        textStyle={styles.btnTxt}
      >
        Sign In
      </BigButton>
      <Text style={styles.txtLink}>Forgot password?</Text>
      <Text style={theme.styles.txt}>
        {"Don't have account? "}
        <Text
          style={styles.txtLink}
          onPress={() => props.navigation.navigate("signup")}
        >
          {"Register"}
        </Text>
      </Text>
    </Screen>
  );
};

export default signinScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.primary,
  },
  btnTxt: {
    color: theme.colors.white,
  },
  txtLink: {
    color: theme.colors.link,
  },
});
