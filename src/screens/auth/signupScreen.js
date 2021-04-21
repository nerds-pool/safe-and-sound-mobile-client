import React, { Fragment, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DatePickerModel from "react-native-modal-datetime-picker";
import { Screen, BigButton } from "../../components/ui";
import { useFormFields, useFormValidation } from "../../../lib/hooks";
import {
  checkExactLength,
  checkMinMaxLength,
  isEmpty,
  isNumbersOnly,
} from "../../../lib/validation";
import theme from "../../../lib/theme";
import api from "../../api";

const signupScreen = (props) => {
  const [regType, setRegType] = useState(null);
  const [show, setShow] = useState(false);
  const [formFields, dispatchFormFields] = useFormFields({
    name: "",
    nic: "",
    phiRegNo: "",
    contact: "",
    password: "",
    dob: [],
    address: "",
    city: "",
    postal: "",
    profession: "",
    affiliation: "",
    gender: null,
  });
  const [fromValidation, dispatchFormValidation] = useFormValidation({
    name: [false, ""],
    nic: [false, ""],
    phiRegNo: [false, ""],
    contact: [false, ""],
    password: [false, ""],
    dob: [false, ""],
    address: [false, ""],
    city: [false, ""],
    postal: [false, ""],
    profession: [false, ""],
    affiliation: [false, ""],
    gender: [false, ""],
  });

  const handleRegTypeSelection = (value) => {
    value === "user"
      ? setRegType("user")
      : value === "phi"
      ? setRegType("phi")
      : setRegType(null);

    props.navigation.setOptions({
      headerTitle:
        value === "user"
          ? "User Sign Up"
          : value === "phi"
          ? "PHI Sign Up"
          : "Sign Up",
    });
  };

  const toggleShowDatePicker = () => {
    setShow(true);
  };

  const toggleHideDatePicker = () => {
    setShow(false);
  };

  const handleDobInput = (date) => {
    const stringDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    dispatchFormFields([date, stringDate])("dob");
  };

  const handleValidation = (key) => {
    const {
      name,
      nic,
      phiRegNo,
      contact,
      password,
      dob,
      address,
      city,
      postal,
      profession,
      affiliation,
      gender,
    } = formFields;

    console.log("validating", key);

    if (key === "name") {
      if (isEmpty(name)) {
        dispatchFormValidation(false, "Name is required!")("name");
        return;
      }
      dispatchFormValidation(true, "")("name");
    }

    if (key === "nic") {
      if (isEmpty(nic)) {
        dispatchFormValidation(false, "NIC is required!")("nic");
        return;
      }
      if (!checkExactLength(nic, 11) || !isNumbersOnly(nic)) {
        dispatchFormValidation(false, "Invalid NIC")("nic");
        return;
      }
      dispatchFormValidation(true, "")("nic");
    }

    if (key === "phiRegNo") {
      if (isEmpty(phiRegNo)) {
        dispatchFormValidation(
          false,
          "Registration number is required!"
        )("phiRegNo");
        return;
      }
      dispatchFormValidation(true, "")("phiRegNo");
    }

    if (key === "contact") {
      if (isEmpty(contact)) {
        dispatchFormValidation(false, "Name is required!")("contact");
        return;
      }
      if (!isNumbersOnly(contact) || !checkExactLength(contact, 10)) {
        dispatchFormValidation(false, "Invalid contact number")("contact");
        return;
      }
      dispatchFormValidation(true, "")("contact");
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

    if (key === "dob") {
      if (dob === []) {
        dispatchFormValidation(false, "Date of birth is required!")("dob");
        return;
      }
      dispatchFormValidation(true, "")("dob");
    }

    if (key === "address") {
      if (isEmpty(address)) {
        dispatchFormValidation(false, "Address is required!")("address");
        return;
      }
      dispatchFormValidation(true, "")("address");
    }

    if (key === "city") {
      if (isEmpty(city)) {
        dispatchFormValidation(false, "City is required!")("city");
        return;
      }
      dispatchFormValidation(true, "")("city");
    }

    if (key === "postal") {
      if (isEmpty(postal)) {
        dispatchFormValidation(false, "Postal is required!")("postal");
        return;
      }
      if (!isNumbersOnly(postal)) {
        dispatchFormValidation(false, "Invalid postal code")("postal");
        return;
      }
      dispatchFormValidation(true, "")("postal");
    }

    if (key === "profession") {
      if (isEmpty(profession)) {
        dispatchFormValidation(false, "Profession is required!")("profession");
        return;
      }
      dispatchFormValidation(true, "")("profession");
    }

    if (key === "affiliation") {
      if (isEmpty(affiliation)) {
        dispatchFormValidation(
          false,
          "Affiliation is required!"
        )("affiliation");
        return;
      }
      dispatchFormValidation(true, "")("affiliation");
    }

    if (key === "gender") {
      if (gender === null) {
        dispatchFormValidation(false, "Gender is required!")("gender");
        return;
      }
      dispatchFormValidation(true, "")("gender");
    }
  };

  const handleSubmit = async () => {
    console.log("Inside hanlde submit");
    // let isValidSubmission = true;

    // if (regType === "phi") {
    //   const phiFields = { ...fromValidation, profession: [true, ""] };
    //   for (const prop in phiFields) {
    //     if (phiFields[prop][0] === false) {
    //       handleValidation(prop.toString());
    //       isValidSubmission = false;
    //       return;
    //     }
    //   }
    // }

    // if (regType === "user") {
    //   const userFields = {
    //     ...fromValidation,
    //     phiRegNo: [true, ""],
    //     affiliation: [true, ""],
    //   };
    //   for (const prop in userFields) {
    //     if (userFields[prop][0] === false) {
    //       handleValidation(prop.toString());
    //       isValidSubmission = false;
    //       return;
    //     }
    //   }
    // }

    // if (!isValidSubmission) return;

    console.log("Body", formFields);

    const {
      name,
      nic,
      phiRegNo,
      contact,
      password,
      dob,
      address,
      city,
      postal,
      profession,
      affiliation,
      gender,
    } = formFields;

    const body =
      regType === "phi"
        ? {
            name,
            nic,
            phiRegNo,
            contact,
            password,
            dob: dob[0],
            address: {
              line: address,
              city,
              postal,
            },
            affiliation,
            gender,
            role: 49,
          }
        : {
            name,
            nic,
            contact,
            password,
            dob: dob[0],
            address: {
              line: address,
              city,
              postal,
            },
            profession,
            gender,
          };

    try {
      const { data } = await api.post.signup(body);
      if (data && !data.success) throw new Error(data.msg);
      console.log("data", data);
      props.navigation.replace("signin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Screen>
      {regType === null ? (
        <Fragment>
          <Text>Please select the correct registration type below...</Text>
          <View style={theme.styles.txtInput}>
            <Picker
              style={theme.styles.fit}
              selectedValue={null}
              // eslint-disable-next-line no-unused-vars
              onValueChange={(itemValue, itemIndex) =>
                handleRegTypeSelection(itemValue)
              }
            >
              <Picker.Item
                label="-- Select Registration Type --"
                value={null}
              />
              <Picker.Item label="User" value="user" />
              <Picker.Item label="PHI" value="phi" />
            </Picker>
          </View>
          <Text style={theme.styles.txt}>
            {"Already have an account? "}
            <Text
              style={styles.txtLink}
              onPress={() => props.navigation.navigate("signin")}
            >
              {"Sign-in"}
            </Text>
          </Text>
        </Fragment>
      ) : (
        <Fragment>
          <TextInput
            style={theme.styles.txtInput}
            placeholder="Full Name"
            value={formFields.name}
            onChangeText={(value) => dispatchFormFields(value)("name")}
            onEndEditing={() => handleValidation("name")}
          />
          <Text style={theme.styles.txtError}>{fromValidation.name[1]}</Text>
          <TextInput
            style={theme.styles.txtInput}
            placeholder="NIC Number (e.g. 19XXXXXXXXX/20XXXXXXXXX)"
            value={formFields.nic}
            onChangeText={(value) => dispatchFormFields(value)("nic")}
            onEndEditing={() => handleValidation("nic")}
            keyboardType="number-pad"
          />
          <Text style={theme.styles.txtError}>{fromValidation.nic[1]}</Text>
          {regType === "phi" ? (
            <Fragment>
              <TextInput
                style={theme.styles.txtInput}
                placeholder="Register Number"
                value={formFields.phiRegNo}
                onChangeText={(value) => dispatchFormFields(value)("phiRegNo")}
                onEndEditing={() => handleValidation("phiRegNo")}
              />
              <Text style={theme.styles.txtError}>
                {fromValidation.phiRegNo[1]}
              </Text>
            </Fragment>
          ) : null}

          <TextInput
            style={theme.styles.txtInput}
            placeholder="Contact"
            value={formFields.contact}
            onChangeText={(value) => dispatchFormFields(value)("contact")}
            onEndEditing={() => handleValidation("contact")}
            keyboardType="number-pad"
          />
          <Text style={theme.styles.txtError}>{fromValidation.contact[1]}</Text>
          <TextInput
            style={theme.styles.txtInput}
            placeholder="Password"
            secureTextEntry
            value={formFields.password}
            onChangeText={(value) => dispatchFormFields(value)("password")}
            onEndEditing={() => handleValidation("password")}
          />
          <Text style={theme.styles.txtError}>
            {fromValidation.password[1]}
          </Text>
          <DatePickerModel
            isVisible={show}
            mode="date"
            onConfirm={(date) => handleDobInput(date)}
            onCancel={toggleHideDatePicker}
            timeZoneOffsetInMinutes={330}
          />
          <TextInput
            style={theme.styles.txtInput}
            placeholder="Date of Birth"
            value={formFields.dob[1]}
            onFocus={toggleShowDatePicker}
            onEndEditing={() => handleValidation("daob")}
          />
          <Text style={theme.styles.txtError}>{fromValidation.dob[1]}</Text>
          <TextInput
            style={theme.styles.txtInput}
            placeholder="Address"
            value={formFields.address}
            onChangeText={(value) => dispatchFormFields(value)("address")}
            onEndEditing={() => handleValidation("address")}
          />
          <Text style={theme.styles.txtError}>{fromValidation.address[1]}</Text>
          <TextInput
            style={theme.styles.txtInput}
            placeholder="City"
            value={formFields.city}
            onChangeText={(value) => dispatchFormFields(value)("city")}
            onEndEditing={() => handleValidation("city")}
          />
          <Text style={theme.styles.txtError}>{fromValidation.city[1]}</Text>
          <TextInput
            style={theme.styles.txtInput}
            placeholder="Postal Code"
            value={formFields.postal}
            onChangeText={(value) => dispatchFormFields(value)("postal")}
            onEndEditing={() => handleValidation("postal")}
            keyboardType="number-pad"
          />
          <Text style={theme.styles.txtError}>{fromValidation.postal[1]}</Text>
          {regType === "user" ? (
            <Fragment>
              <TextInput
                style={theme.styles.txtInput}
                placeholder="Profession"
                value={formFields.profession}
                onChangeText={(value) =>
                  dispatchFormFields(value)("profession")
                }
                onEndEditing={() => handleValidation("profession")}
              />
              <Text style={theme.styles.txtError}>
                {fromValidation.profession[1]}
              </Text>
            </Fragment>
          ) : null}
          {regType === "phi" ? (
            <Fragment>
              <TextInput
                style={theme.styles.txtInput}
                placeholder="Affiliation"
                value={formFields.affiliation}
                onChangeText={(value) =>
                  dispatchFormFields(value)("affiliation")
                }
                onEndEditing={() => handleValidation("affiliation")}
              />
              <Text style={theme.styles.txtError}>
                {fromValidation.affiliation[1]}
              </Text>
            </Fragment>
          ) : null}
          <View style={theme.styles.txtInput}>
            <Picker
              style={theme.styles.fit}
              selectedValue={formFields.gender}
              // eslint-disable-next-line no-unused-vars
              onValueChange={(itemValue, itemIndex) =>
                dispatchFormFields(itemValue)("gender")
              }
            >
              <Picker.Item label="-- Select Gender --" value={null} />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
          <Text style={theme.styles.txtError}>{fromValidation.gender[1]}</Text>
          <BigButton
            style={{ ...theme.styles.btn, ...styles.btn }}
            textStyle={styles.btnTxt}
            onPress={handleSubmit}
          >
            Sign Up
          </BigButton>
          <Text tyle={theme.styles.txt}>
            By submiting this form you agree to our{" "}
            <Text style={styles.txtLink}>Privacy Policy</Text>
          </Text>
        </Fragment>
      )}
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
