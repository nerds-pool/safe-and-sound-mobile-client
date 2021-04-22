import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import theme from "../../../lib/theme";

const Loading = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Loading;
