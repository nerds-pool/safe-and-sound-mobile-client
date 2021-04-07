import Colors from "./Colors";
import { Dimensions, StyleSheet } from "react-native";

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get("window");
const FIELD_HEIGHT = 50;
const FIELD_WIDTH = WINDOW_WIDTH - 30;
const DEFAULT_RADIUS = 5;
const DEFAULT_BORDER_WIDTH = 1;
// const DEFAULT_V_PADDING = 10;
const DEFAULT_V_MARGIN = 10;

export default StyleSheet.create({
  btn: {
    height: FIELD_HEIGHT,
    marginVertical: DEFAULT_V_MARGIN,
    width: FIELD_WIDTH,
  },
  txt: {
    color: Colors.primary,
  },
  txtInput: {
    borderBottomColor: Colors.accent,
    borderBottomWidth: DEFAULT_BORDER_WIDTH,
    height: FIELD_HEIGHT,
    marginVertical: DEFAULT_V_MARGIN,
    width: FIELD_WIDTH,
  },
});
