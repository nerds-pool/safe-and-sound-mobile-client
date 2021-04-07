import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../theme/Colors";

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
    backgroundColor: Colors.accent,
    borderColor: Colors.primary,
    borderRadius: 5,
    borderWidth: 0,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  buttonText: {
    color: Colors.primary,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default BigButton;
