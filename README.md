# Wix RNUI Lib

## Installation

Docs: <https://wix.github.io/react-native-ui-lib/docs/getting-started/setup>

`yarn add react-native-ui-lib`

### Dependencies

`yarn add react-native-reanimated react-native-gesture-handler`

## Setup

Docs: <https://wix.github.io/react-native-ui-lib/docs/foundation/style>

```js
import { View } from "react-native-ui-lib";

export default function Index() {
  return (
    <View row gap-s5 centerV flex bg-$backgroundDefault>
      <View style={{ width: 200, height: 200 }} bg-purple40 centerH>
        <View style={{ width: 60, height: 60 }} bg-green20 />
      </View>
      <View style={{ width: 150, height: 150 }} bg-orange30 bottom right>
        <View style={{ width: 50, height: 50 }} bg-yellow40 br100 margin-s2 />
      </View>
    </View>
  );
}
```

### Dark Mode Support

#### Wrong Way

Add this to root file of the app (say _layout.tsx)

```js
require("react-native-ui-lib/config").setConfig({ appScheme: "default" });
```

But this stops working unexpectedly

#### Right Way

In the _layout.tsx, add this.

```js
import { Colors } from "react-native-ui-lib";
Colors.setScheme("default"); // "default" | "dark" | "light"
```

`layout.tsx`
```js
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "react-native-ui-lib";

Colors.setScheme("default");

export default function RootLayout() {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          height: "100%",
          width: "100%",
          backgroundColor: Colors.$backgroundDefault,
        },
      ]}
    >
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.$backgroundDefault },
          headerTintColor: Colors.$textDefault,
        }}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
```

## More

Read docs: <https://wix.github.io/react-native-ui-lib/docs/foundation/style>
