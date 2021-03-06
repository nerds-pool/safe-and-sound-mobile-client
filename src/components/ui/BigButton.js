import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../../../lib/theme";

const BigButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
      onPress={props.onPress}
    >
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={{ ...styles.buttonText, ...props.textStyle }}>
          {props.children}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    marginVertical: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default BigButton;
