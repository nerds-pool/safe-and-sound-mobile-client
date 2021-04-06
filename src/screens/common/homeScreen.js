import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/ui/customHeaderButton";
import Colors from "../../theme/Colors";
import AppContext from "../../context";

const homeScreen = (props) => {
  const { appMode } = useContext(AppContext);

  useEffect(() => {
    repaintHeaderButtons();
  }, [appMode]);

  const repaintHeaderButtons = () => {
    if (appMode === "user") {
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

    if (appMode === "phi") {
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
  };

  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default homeScreen;
