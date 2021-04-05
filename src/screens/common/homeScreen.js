import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/ui/customHeaderButton";
import Colors from "../../theme/Colors";

const homeScreen = (props) => {
  const [Type, setType] = useState("phi");

  useEffect(() => {
    repaintHeaderButtons();
  }, [repaintHeaderButtons]);

  const repaintHeaderButtons = useCallback(() => {
    if (Type === "user") {
      props.navigation.setOptions({
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="History"
              IconComponent={Ionicons}
              iconName="document-text-outline"
              color={Colors.accent}
              onPress={() => props.navigation.navigate("history")}
            />
            <Item
              title="Log Out"
              IconComponent={Ionicons}
              iconName="log-out-outline"
              color={Colors.accent}
              onPress={() => {}}
            />
          </HeaderButtons>
        ),
      });
    }

    if (Type === "phi") {
      props.navigation.setOptions({
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Add Test Resut"
              IconComponent={Ionicons}
              iconName="create-outline"
              color={Colors.accent}
              onPress={() => props.navigation.navigate("test")}
            />
            <Item
              title="Search"
              IconComponent={Ionicons}
              iconName="search-outline"
              color={Colors.accent}
              onPress={() => props.navigation.navigate("search")}
            />
            <Item
              title="Log Out"
              IconComponent={Ionicons}
              iconName="log-out-outline"
              color={Colors.accent}
              onPress={() => {}}
            />
          </HeaderButtons>
        ),
      });
    }
  }, [Type]);

  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({});
