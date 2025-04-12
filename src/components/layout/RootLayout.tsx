import { Stack } from "expo-router";
import { Colors } from "react-native-ui-lib";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.$backgroundDefault },
        headerTintColor: Colors.$textDefault,
      }}
    />
  );
}
