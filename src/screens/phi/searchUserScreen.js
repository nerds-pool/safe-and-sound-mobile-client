import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import Screen from "../../components/ui/Screen";
import Users from "../../dummy-data/users";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const UserResultTile = ({ name, onNavigate }) => {
  return (
    <Pressable onPress={onNavigate}>
      <View style={styles.tileContainer}>
        <Text>{name}</Text>
        <Ionicons name="chevron-forward-outline" size={16} />
      </View>
    </Pressable>
  );
};

const searchUserScreen = (props) => {
  return (
    <Screen>
      <TextInput
        style={theme.styles.txtInput}
        placeholder="Enter NIC to Search a User"
      />
      {Users.map((user) => (
        <UserResultTile
          key={Users.indexOf(user)}
          name={user.name}
          onNavigate={() => props.navigation.navigate("user", { id: user.id })}
        />
      ))}
    </Screen>
  );
};

export default searchUserScreen;

const styles = StyleSheet.create({
  tileContainer: {
    alignItems: "center",
    borderColor: theme.colors.background,
    borderWidth: 1,
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    marginVertical: 2,
    paddingHorizontal: 10,
    width: WINDOW_WIDTH - 30,
  },
});
