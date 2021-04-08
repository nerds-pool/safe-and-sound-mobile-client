import Colors from "./Colors";
import { Dimensions, StyleSheet } from "react-native";

const { width: WINDOW_WIDTH } = Dimensions.get("window");
const FIELD_HEIGHT = 50;
const FIELD_WIDTH = WINDOW_WIDTH - 30;
const DEFAULT_BORDER_WIDTH = 1;
const DEFAULT_V_MARGIN = 10;

export default StyleSheet.create({
  btn: {
    height: FIELD_HEIGHT,
    marginVertical: DEFAULT_V_MARGIN,
    width: FIELD_WIDTH,
  },
  fit: {
    flex: 1,
  },
  txt: {
    color: Colors.primary,
    marginVertical: DEFAULT_V_MARGIN,
  },
  txtError: {
    color: Colors.red,
    fontSize: 12,
    textAlign: "left",
  },
  txtInput: {
    borderBottomColor: Colors.accent,
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    height: FIELD_HEIGHT,
    marginVertical: DEFAULT_V_MARGIN,
    width: FIELD_WIDTH,
  },
});
