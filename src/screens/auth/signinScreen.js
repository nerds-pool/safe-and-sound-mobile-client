import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { BigButton, Screen, Loading } from "../../components/ui";
import { useFormFields, useFormValidation } from "../../../lib/hooks";
import {
  isNumbersOnly,
  checkExactLength,
  checkMinMaxLength,
} from "../../../lib/validation";
import theme from "../../../lib/theme";
import api from "../../api";
import { setMode, setTokens, setUser } from "../../context/actions";
import { GlobalContext } from "../../context";

const signinScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [formFields, dispatchFormFields] = useFormFields({
    nic: "",
    password: "",
  });
  const [fromValidation, dispatchFormValidation] = useFormValidation({
    nic: [false, ""],
    password: [false, ""],
  });
  const { dispatchUser, dispatchToken } = useContext(GlobalContext);

  const handleValidation = (key) => {
    const { nic, password } = formFields;
    console.log("validating", key);

    if (key === "nic") {
      if (!checkExactLength(nic, 12) || !isNumbersOnly(nic)) {
        dispatchFormValidation(false, "Invalid NIC")("nic");
        return;
      }
      dispatchFormValidation(true, "")("nic");
    }

    if (key === "password") {
      if (!checkMinMaxLength(password, { min: 6, max: 20 })) {
        dispatchFormValidation(
          false,
          "Password length should between 6 and 20"
        )("password");
        return;
      }
      dispatchFormValidation(true, "")("password");
    }
  };

  const handleSubmit = async () => {
    let isSubmissionValid = true;

    for (const prop in fromValidation) {
      if (fromValidation[prop][0] === false) {
        handleValidation(prop.toString());
        isSubmissionValid = false;
        return;
      }
    }

    if (!isSubmissionValid) return;

    console.log("Body", formFields);

    const { nic, password } = formFields;

    try {
      setLoading(true);
      const { data } = await api.post.signin({ nic, password });
      if (data && !data.success) throw new Error(data.msg);
      console.log("data", data);
      const userMode = data.result.role === 49 ? "phi" : "user";
      dispatchUser(
        setUser({
          id: data.result.id,
          nic: data.result.nic,
          role: data.result.role,
        })
      );
      dispatchUser(setMode(userMode));
      dispatchToken(setTokens(data.result.signToken));
      props.navigation.replace("home");
    } catch (error) {
      alert("Oops! " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <Screen>
      <TextInput
        style={theme.styles.txtInput}
        placeholder="NIC Number (e.g. 19XXXXXXXXX/20XXXXXXXXX)"
        value={formFields.nic}
        onChangeText={(value) => dispatchFormFields(value)("nic")}
        onEndEditing={() => handleValidation("nic")}
        keyboardType="number-pad"
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
