import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { BigButton, Screen } from "../../components/ui";
import { useFormFields, useFormValidation } from "../../../lib/hooks";
import {
  isOnlyNumbers,
  checkExactLength,
  checkMinMaxLength,
} from "../../../lib/validation";
import theme from "../../../lib/theme";

const signinScreen = (props) => {
  const [formFields, dispatchFormFields] = useFormFields({
    nic: "",
    password: "",
  });
  const [fromValidation, dispatchFormValidation] = useFormValidation({
    nic: [false, ""],
    password: [false, ""],
  });

  const handleValidation = (key) => {
    const { nic, password } = formFields;

    if (key === "nic") {
      if (!checkExactLength(nic, 11) || !isOnlyNumbers.test(parseInt(nic))) {
        dispatchFormValidation(false, "Invalid NIC")("nic");
        return;
      }
      dispatchFormValidation(true, "")("nic");
    }

    if (key === "password") {
      if (!checkMinMaxLength(password, { min: 6, max: 12 })) {
        dispatchFormValidation(
          false,
          "Password length should between 6 and 12"
        )("password");
        return;
      }
      dispatchFormValidation(true, "")("password");
    }
  };

  const handleSubmit = () => {
    console.log(`Validations`, {
      nic: fromValidation.nic[0],
      passowrd: fromValidation.password[0],
    });

    for (const prop in fromValidation) {
      if (!prop[0]) return;
    }

    console.log("Body", formFields);
  };

  return (
    <Screen>
      <TextInput
        style={theme.styles.txtInput}
        placeholder="NIC Number"
        value={formFields.nic}
        onChangeText={(value) => dispatchFormFields(value)("nic")}
        onEndEditing={() => handleValidation("nic")}
      />
      <Text style={theme.styles.txtError}>{fromValidation.nic[1]}</Text>
      <TextInput
        style={theme.styles.txtInput}
        placeholder="Password"
        secureTextEntry
        value={formFields.password}
        onChangeText={(value) => dispatchFormFields(value)("password")}
        onChange={() => handleValidation("password")}
      />
      <Text style={theme.styles.txtError}>{fromValidation.password[1]}</Text>
      <BigButton
        style={{ ...theme.styles.btn, ...styles.btn }}
        textStyle={styles.btnTxt}
        onPress={() => handleSubmit(formFields)}
      >
        Sign In
      </BigButton>
      <Text style={{ ...theme.styles.txt, ...styles.txtLink }}>
        Forgot password?
      </Text>
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
