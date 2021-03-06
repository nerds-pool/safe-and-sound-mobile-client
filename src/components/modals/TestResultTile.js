import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../lib/theme";

const { width: WINDOW_WIDTH } = Dimensions.get("window");
const TILE_HEIGHT = 120;

const TestResultTile = ({ hospital, testedDate, issuedDate, result, type }) => {
  return (
    <View style={styles.tileContainer}>
      <View style={styles.tileLeft}>
        <Text style={styles.txtBold}>
          {"INDICATING "}
          <Text style={result === "positive" ? styles.red : null}>
            {result.toUpperCase()}
          </Text>{" "}
          {"RESULT"}
        </Text>
        <Text
          style={styles.txt}
          numberOfLines={1}
        >{`Issued By: ${hospital}`}</Text>
        <Text style={styles.txt}>{`Issued Date: ${new Date(
          issuedDate
        ).getDate()}/${new Date(issuedDate).getMonth() + 1}/${new Date(
          issuedDate
        ).getFullYear()}`}</Text>
        <Text style={styles.txt}>{`Tested Date: ${new Date(
          testedDate
        ).getDate()}/${new Date(testedDate).getMonth() + 1}/${new Date(
          testedDate
        ).getFullYear()}`}</Text>
        <Text style={styles.txt}>{`Test Type: ${type.toUpperCase()}`}</Text>
      </View>
      <View style={styles.tileRight}>
        <Ionicons
          name="ellipse-sharp"
          size={25}
          color={
            result === "negetive"
              ? "green"
              : result === "positive"
              ? "red"
              : null
          }
        />
      </View>
    </View>
  );
};

export default TestResultTile;

const styles = StyleSheet.create({
  red: {
    color: theme.colors.red,
  },
  tileContainer: {
    alignItems: "center",
    borderColor: theme.colors.accent,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    height: TILE_HEIGHT,
    justifyContent: "space-between",
    marginVertical: 7,
    paddingHorizontal: 20,
    width: WINDOW_WIDTH - 30,
  },
  tileLeft: {
    flex: 6,
  },
  tileRight: {
    alignItems: "flex-end",
    flex: 1,
  },
  txt: {},
  txtBold: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
