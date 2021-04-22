import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Vibration,
  Dimensions,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import theme from "../../../lib/theme";
import api from "../../api";
import { GlobalContext } from "../../context";
import { Loading } from "../../components/ui";

const { width: WINDOW_WIDTH } = Dimensions.get("window");
const VIBRATION_DURATION_IN_MS = 100;

const qrScannerScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userState } = useContext(GlobalContext);

  // eslint-disable-next-line no-unused-vars
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    Vibration.vibrate(VIBRATION_DURATION_IN_MS);
    const addLocationBody = {
      location: data.toString(),
      user: userState.id,
      arrival: new Date().getTime().toString(),
    };

    console.log("Data to be send", addLocationBody);

    try {
      setLoading(true);
      const { data } = await api.put.add_new_visit(addLocationBody);
      if (!data.success) throw new Error(data.msg ?? "Somehing went wrong...");
      props.navigation.navigate("checkout");
    } catch (error) {
      alert("Oops! " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <View style={styles.screen}>
      {hasPermission === null ? (
        <Text style={styles.description}>Requesting for camera permission</Text>
      ) : hasPermission === false ? (
        <Text style={styles.description}>No access to camera</Text>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? null : handleBarCodeScanned}
          style={[StyleSheet.absoluteFill, styles.scanner]}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        >
          <Text style={[styles.description, styles.descriptionTop]}>
            Safe&Sound
          </Text>
          <Image
            style={styles.qr}
            source={require("../../../assets/qr-scanner-frame.png")}
          />
          <Text style={[styles.description, styles.descriptionBtm]}>
            Scan QR code to check-in
          </Text>
        </BarCodeScanner>
      )}
    </View>
  );
};

export default qrScannerScreen;

const styles = StyleSheet.create({
  description: {
    color: theme.colors.white,
    textAlign: "center",
    width: "70%",
  },
  descriptionBtm: {
    fontSize: 20,
    marginBottom: "10%",
  },
  descriptionTop: {
    fontSize: 36,
    marginTop: "10%",
  },
  qr: {
    height: WINDOW_WIDTH * 0.8,
    marginBottom: "10%",
    marginTop: "10%",
    width: WINDOW_WIDTH * 0.8,
  },
  scanner: {
    alignItems: "center",
    backgroundColor: theme.colors.black,
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  screen: {
    alignItems: "center",
    backgroundColor: theme.colors.black,
    flex: 1,
    justifyContent: "center",
  },
});
