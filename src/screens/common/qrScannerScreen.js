import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Vibration,
  Dimensions,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Colors from "../../theme/Colors";

const { width: WINDOW_WIDTH } = Dimensions.get("window");
const ONE_SECOND_IN_MS = 100;

const qrScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Vibration.vibrate(ONE_SECOND_IN_MS);
    const addLocationBody = {
      location: data.toString(),
      user: "6bdfgr5tyfgr4f789",
      arrival: new Date().getTime().toString(),
    };

    console.log("Data to be send", addLocationBody);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.screen}>
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
    </View>
  );
};

export default qrScannerScreen;

const styles = StyleSheet.create({
  description: {
    color: Colors.white,
    textAlign: "center",
    width: "70%",
  },
  descriptionBtm: {
    fontSize: 20,
    marginBottom: "10%",
  },
  descriptionTop: {
    fontSize: 30,
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
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  screen: {
    backgroundColor: Colors.black,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
