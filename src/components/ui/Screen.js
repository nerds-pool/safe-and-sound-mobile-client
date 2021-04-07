import React from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import theme from "../../theme";

const Screen = (props) => {
  return (
    <KeyboardAvoidingView
      style={{ ...styles.screen, ...props.style }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{ ...styles.scroll, ...props.containerStyle }}
        keyboardShouldPersistTaps={"handled"}
      >
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  scroll: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingTop: 30,
  },
});

export default Screen;
