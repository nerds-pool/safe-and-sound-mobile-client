import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { BigButton } from "../../components/ui";
import theme from "../../../lib/theme";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const startScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.txtWrapper}>
        <Text style={styles.txt}>Safe & Sound</Text>
      </View>
      <View style={styles.imgWrapper}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require("../../../assets/hero.png")}
        />
      </View>
      <View style={styles.btnWrapper}>
        <BigButton
          style={{ ...styles.btn, ...styles.btnSIn }}
          textStyle={styles.btnSInTxt}
          onPress={() => props.navigation.navigate("signin")}
        >
          {"Sign In"}
        </BigButton>
        <BigButton
          style={{ ...styles.btn, ...styles.btnSUp }}
          textStyle={styles.btnSUpTxt}
          onPress={() => props.navigation.navigate("signup")}
        >
          {"Sign Up"}
        </BigButton>
      </View>
    </View>
  );
};

export default startScreen;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    marginVertical: 5,
  },
  btnSIn: {
    backgroundColor: theme.colors.primary,
  },
  btnSInTxt: {
    color: theme.colors.background,
    fontSize: 16,
    fontWeight: "bold",
  },
  btnSUp: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.background,
    borderWidth: 1,
  },
  btnSUpTxt: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  btnWrapper: {
    flex: 1,
    width: WINDOW_WIDTH - 60,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  imgWrapper: {
    flex: 3,
    width: WINDOW_WIDTH,
  },
  screen: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: "center",
  },
  txt: {
    color: theme.colors.primary,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
});
