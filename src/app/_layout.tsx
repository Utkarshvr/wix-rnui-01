require("react-native-ui-lib/config").setConfig({ appScheme: "default" });
import { Slot } from "expo-router";


export default function RootLayout() {
  return <Slot  />;
}
