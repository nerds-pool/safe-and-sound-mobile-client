import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import theme from "../../../lib/theme";
import { Loading, Screen } from "../../components/ui";
import Slider from "@react-native-community/slider";
import api from "../../api";

const { width: WINDOWS_WIDTH } = Dimensions.get("window");

const checkoutScreen = (props) => {
  const [loading, setloading] = useState(false);

  const handleValueChange = async (value) => {
    if (value === 1) {
      try {
        setloading(true);
        const { data } = await api.patch.checkout();
        if (!data.success) throw new Error(data.msg);
        props.navigation.navigate("home");
      } catch (error) {
        alert("Oops! " + error.message);
      } finally {
        setloading(false);
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <Screen containerStyle={styles.screen}>
      <Text style={{ ...styles.txt, ...styles.txtSemi }}>
        Safely checked in to
      </Text>
      <Text style={{ ...styles.txt, ...styles.txtBold }}>
        Cargills Food City at Kottawa
      </Text>

      <View style={styles.sliderWrapper}>
        <Slider
          step={1}
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme.colors.primary}
          maximumTrackTintColor={theme.colors.accent}
          thumbTintColor={theme.colors.primary}
          onValueChange={handleValueChange}
        />
      </View>
      <Text style={styles.txt}>Slide right to safely check out...</Text>
    </Screen>
  );
};

export default checkoutScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0,
  },
  slider: {
    backgroundColor: theme.colors.background,
    height: 50,
    width: WINDOWS_WIDTH - 60,
  },
  sliderWrapper: {
    borderColor: theme.colors.black,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 40,
    overflow: "hidden",
  },
  txt: {
    color: theme.colors.primary,
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
    width: WINDOWS_WIDTH - 60,
  },
  txtBold: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtSemi: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
});
