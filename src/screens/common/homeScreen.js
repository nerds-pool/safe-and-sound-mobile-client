import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { BigButton, CustomHeaderButton } from "../../components/ui";
import theme from "../../../lib/theme";
import { GlobalContext } from "../../context";

const { width: WINDOW_WIDTH } = Dimensions.get("window");
const ELEVATION = 5;

const homeScreen = (props) => {
  const { userState } = useContext(GlobalContext);

  console.log("userState", userState);

  const repaintHeaderButtons = () => {
    if (userState.mode === "user") {
      props.navigation.setOptions({
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="History"
              IconComponent={Ionicons}
              iconName="document-text-outline"
              color={theme.colors.accent}
              onPress={() => props.navigation.navigate("history")}
            />
            {/* <Item
              title="Log Out"
              IconComponent={Ionicons}
              iconName="log-out-outline"
              color={theme.colors.accent}
              onPress={() => {}}
            /> */}
          </HeaderButtons>
        ),
      });
    }

    if (userState.mode === "phi") {
      props.navigation.setOptions({
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Add Test Resut"
              IconComponent={Ionicons}
              iconName="create-outline"
              color={theme.colors.accent}
              onPress={() => props.navigation.navigate("test")}
            />
            <Item
              title="History"
              IconComponent={Ionicons}
              iconName="document-text-outline"
              color={theme.colors.accent}
              onPress={() => props.navigation.navigate("history")}
            />
            <Item
              title="Search"
              IconComponent={Ionicons}
              iconName="search-outline"
              color={theme.colors.accent}
              onPress={() => props.navigation.navigate("search")}
            />
            {/* <Item
              title="Log Out"
              IconComponent={Ionicons}
              iconName="log-out-outline"
              color={theme.colors.accent}
              onPress={() => {}}
            /> */}
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
  }, [userState]);

  return (
    <View style={styles.screen}>
      <View style={styles.txtWrapper}>
        <Text style={styles.txt}>
          Scan the QR code at your visited location to check-in safely!
        </Text>
      </View>
      <View style={styles.imgWrapper}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require("../../../assets/hero.png")}
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
    backgroundColor: theme.colors.primary,
    height: 50,
    width: WINDOW_WIDTH - 60,
  },
  btnWrapper: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    elevation: ELEVATION,
    flex: 1,
    width: WINDOW_WIDTH,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  imgWrapper: {
    backgroundColor: theme.colors.white,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    elevation: ELEVATION,
    flex: 6,
    width: WINDOW_WIDTH,
  },
  screen: {
    alignItems: "center",
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: "center",
  },
  txt: {
    color: theme.colors.primary,
    fontSize: 18,
    marginTop: 30,
    padding: 20,
    textAlign: "center",
  },
  txtWrapper: {
    backgroundColor: theme.colors.background,
    flex: 2,
  },
});
