import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/ui/customHeaderButton";
import Colors from "../../theme/Colors";
import AppContext from "../../context";
import BigButton from "../../components/ui/BigButton";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const homeScreen = (props) => {
  const { appMode } = useContext(AppContext);

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

  const handleOnPress = () => {
    props.navigation.navigate("scanner");
  };

  useEffect(() => {
    repaintHeaderButtons();
  }, [appMode]);

  return (
    <View style={styles.screen}>
      <Text style={styles.txt}>Scan the QR code at your visited location to check-in safely!</Text>
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={require("../../../assets/home_transparent.png")}
        />
      </View>
      <View style={styles.btnWrapper}>
        <BigButton style={styles.btn} onPress={handleOnPress}>
          {"Scan QR"}
        </BigButton>
      </View>
    </View>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    height: 60,
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
    flex: 5,
    width: WINDOW_WIDTH,
  },
  screen: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center",
  },
  txt: {
    color: Colors.primary,
    fontSize: 18,
    marginTop: 30,
    padding: 20,
    textAlign: "center"
  }
});
