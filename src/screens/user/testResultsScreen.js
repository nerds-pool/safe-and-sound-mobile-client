import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { TestResultTile } from "../../components/modals";
import api from "../../api/index";

const testResultsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [rerender, setRerender] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get.fetch_test_results();
        if (!data.success) {
          throw new Error(data.msg);
        }
        setHistory([...data.result]);
      } catch (error) {
        alert("Oops! " + error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [rerender]);

  const forceUpdate = () => {
    setRerender((prevState) => prevState + 1);
  };

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
        data={history}
        renderItem={renderReportStatusTile}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        onRefresh={forceUpdate}
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
