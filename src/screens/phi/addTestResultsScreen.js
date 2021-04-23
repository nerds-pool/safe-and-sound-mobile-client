import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import theme from "../../../lib/theme";
import { Screen, BigButton, Loading } from "../../components/ui";
import api from "../../api/index";

const addTestResultsScreen = () => {
  const [nic, setNic] = useState("");
  const [issuer, setIssuer] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [testDate, setTestDate] = useState("");
  const [testType, setTestType] = useState("");
  const [testStatus, setTestStatus] = useState("");
  const [loading, setloading] = useState(false);

  const handleClear = () => {
    setNic("");
    setIssuer("");
    setIssueDate("");
    setTestDate("");
    setTestType(null);
    setTestStatus(null);
  };

  const handleSubmit = async () => {
    try {
      setloading(true);
      const body = {
        issuedBy: issuer,
        issuedDate: new Date(issueDate).toUTCString(),
        testedDate: new Date(testDate).toUTCString(),
        testType: testType,
        testStatus: testStatus,
      };

      const { data } = await api.put.update_test_results(nic, body);
      if (!data.success) throw new Error(data.msg);
      handleClear();
    } catch (error) {
      alert("Oops! " + error.message);
    } finally {
      setloading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <Screen>
      <TextInput
        style={theme.styles.txtInput}
        value={nic}
        placeholder="NIC Number"
        onChangeText={(text) => setNic(text)}
      />
      <TextInput
        style={theme.styles.txtInput}
        value={issuer}
        placeholder="Issued By"
        onChangeText={(text) => setIssuer(text)}
      />
      <TextInput
        style={theme.styles.txtInput}
        value={issueDate}
        placeholder="Issue Date (yyyy/MM/dd)"
        onChangeText={(text) => setIssueDate(text)}
      />
      <TextInput
        style={theme.styles.txtInput}
        value={testDate}
        placeholder="Tested Date (yyyy/MM/dd)"
        onChangeText={(text) => setTestDate(text)}
      />
      <View style={theme.styles.txtInput}>
        <Picker
          style={theme.styles.fit}
          selectedValue={testType}
          // eslint-disable-next-line no-unused-vars
          onValueChange={(itemValue, itemIndex) => setTestType(itemValue)}
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
          onValueChange={(itemValue, itemIndex) => setTestStatus(itemValue)}
        >
          <Picker.Item label="Test Result" value={null} />
          <Picker.Item label="Negetive" value="negetive" />
          <Picker.Item label="Positive" value="positive" />
        </Picker>
      </View>

      <BigButton
        style={{ ...theme.styles.btn, ...styles.btn }}
        textStyle={styles.btnTxt}
        onPress={handleSubmit}
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
