import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import theme from "../../theme";
import Screen from "../../components/ui/Screen";
import BigButton from "../../components/ui/BigButton";

const signupScreen = (props) => {
  return (
    <Screen>
      <TextInput style={theme.styles.txtInput} placeholder="Full Name" />
      <TextInput style={theme.styles.txtInput} placeholder="NIC Number" />
      <TextInput style={theme.styles.txtInput} placeholder="Date of Birth" />
      <TextInput style={theme.styles.txtInput} placeholder="Address" />
      <TextInput style={theme.styles.txtInput} placeholder="City" />
      <TextInput style={theme.styles.txtInput} placeholder="Postal Code" />
      <TextInput style={theme.styles.txtInput} placeholder="Profession" />
      <TextInput style={theme.styles.txtInput} placeholder="Email" />
      <TextInput style={theme.styles.txtInput} placeholder="Password" secureTextEntry />
      <TextInput style={theme.styles.txtInput} placeholder="Confirm Password" secureTextEntry />
      <BigButton
        style={{ ...theme.styles.btn, ...styles.btn }}
        textStyle={styles.btnTxt}
      >
        Sign Up
      </BigButton>
      <Text style={theme.styles.txt}>
        {"Already have an account? "}
        <Text
          style={styles.txtLink}
          onPress={() => props.navigation.navigate("signin")}
        >
          {"Sign-in"}
        </Text>
      </Text>
      <Text tyle={theme.styles.txt}>
        By submiting this form you agree to our{" "}
        <Text style={styles.txtLink}>Privacy Policy</Text>
      </Text>
    </Screen>
  );
};

export default signupScreen;

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
