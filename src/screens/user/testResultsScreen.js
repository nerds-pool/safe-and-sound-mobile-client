import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import History from "../../dummy-data/testResults";
import TestResultTile from "../../components/modals/TestResultTile";

const testResultsScreen = () => {
  const renderReportStatusTile = ({ item }) => (
    <TestResultTile
      testedDate={item.testedDate}
      issuedDate={item.issuedDate}
      result={item.result}
      hospital={item.hospital}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={History}
        renderItem={renderReportStatusTile}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default testResultsScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    paddingTop: 20,
  },
});
