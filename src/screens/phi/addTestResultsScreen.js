import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import theme from "../../../lib/theme";
import { Screen, BigButton } from "../../components/ui";

const addTestResultsScreen = () => {
  return (
    <Screen>
      <TextInput style={theme.styles.txtInput} placeholder="NIC Number" />
      <TextInput style={theme.styles.txtInput} placeholder="Issuer" />
      <TextInput style={theme.styles.txtInput} placeholder="Issue Date" />
      <TextInput style={theme.styles.txtInput} placeholder="Tested Date" />
      <View style={theme.styles.txtInput}>
        <Picker
          style={theme.styles.fit}
          selectedValue={null}
          // eslint-disable-next-line no-unused-vars
          onValueChange={(itemValue, itemIndex) => {}}
        >
          <Picker.Item label="Test Type" value={null} />
          <Picker.Item label="PCR" value="pcr" />
          <Picker.Item label="Antigen" value="antigen" />
        </Picker>
      </View>
      <View style={theme.styles.txtInput}>
        <Picker
          style={theme.styles.fit}
          selectedValue={null}
          // eslint-disable-next-line no-unused-vars
          onValueChange={(itemValue, itemIndex) => {}}
        >
          <Picker.Item label="Test Result" value={null} />
          <Picker.Item label="Negetive" value="negetive" />
          <Picker.Item label="Positive" value="positive" />
        </Picker>
      </View>

      <BigButton
        style={{ ...theme.styles.btn, ...styles.btn }}
        textStyle={styles.btnTxt}
      >
        Submit
      </BigButton>
      <Text tyle={theme.styles.txt}>
        Please make sure all the entries are accurate before submit
      </Text>
    </Screen>
  );
};

export default addTestResultsScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.primary,
  },
  btnTxt: {
    color: theme.colors.white,
  },
});
