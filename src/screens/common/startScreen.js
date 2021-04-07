import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Colors from "../../theme/Colors";
import BigButton from "../../components/ui/BigButton";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const startScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.txtWrapper}>
        <Text style={styles.txt}>Safe & Sound</Text>
      </View>
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={require("../../../assets/home_transparent.png")}
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
          style={{ ...styles.btn, ...styles.btnSOut }}
          textStyle={styles.btnSOutTxt}
          onPress={() => props.navigation.navigate("signup") }
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
    height: 60,
  },
  btnSIn: {
    backgroundColor: Colors.background,
  },
  btnSInTxt: {
    color: Colors.primary,
  },
  btnSOut: {
    backgroundColor: Colors.accent,
  },
  btnSOutTxt: {
    color: Colors.white,
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
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: "center",
  },
  txt: {
    color: Colors.background,
    fontSize: 36,
    marginTop: 60,
    textAlign: "center",
  },
  txtWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
