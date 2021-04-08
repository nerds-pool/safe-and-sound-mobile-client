import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { TestResultTile } from "../../components/modals";
import History from "../../dummy-data/testResults";

const testResultsScreen = () => {
  const renderReportStatusTile = ({ item }) => (
    <TestResultTile
      testedDate={item.testedDate}
      issuedDate={item.issuedDate}
      result={item.result}
      hospital={item.hospital}
      type={item.type}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={History}
        renderItem={renderReportStatusTile}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default testResultsScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
});
