import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../lib/theme";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const UserTile = ({
  name,
  contact,
  email,
  gender,
  profession,
  address,
  city,
}) => {
  const [isExpand, setIsExpand] = useState(false);

  const handlePress = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={styles.tileWrapper}>
          <View>
            <Text style={styles.txt}>{`Name: ${name}`}</Text>
            <Text style={styles.txt}>{`City: ${city}`}</Text>
          </View>
          {isExpand ? (
            <Ionicons name="chevron-up-outline" size={18} />
          ) : (
            <Ionicons name="chevron-down-outline" size={18} />
          )}
        </View>
      </Pressable>
      {isExpand ? (
        <View style={styles.tileExpand}>
          <Text style={styles.txt}>{`Contact: ${contact}`}</Text>
          <Text style={styles.txt}>{`Address: ${address}`}</Text>
          <Text style={styles.txt}>{`Profession: ${profession}`}</Text>
          <Text style={styles.txt}>{`Gender: ${gender}`}</Text>
          <Text style={styles.txt}>{email ? `Email: ${email}` : null}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default UserTile;

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH - 30,
  },
  tileExpand: {
    borderColor: theme.colors.background,
    borderRadius: 5,
    borderWidth: 1,
    height: 150,
    justifyContent: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tileWrapper: {
    alignItems: "center",
    borderColor: theme.colors.background,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  txt: {
    color: theme.colors.primary,
    fontSize: 16,
    marginVertical: 2,
  },
});
