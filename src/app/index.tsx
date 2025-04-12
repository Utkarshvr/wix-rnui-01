import {
  Button,
  ColorPalette,
  Colors,
  LoaderScreen,
  TextField,
  Timeline,
  View,
  WheelPicker,
} from "react-native-ui-lib";

export default function Index() {
  return (
    <View gap-s5 centerV flex bg-$backgroundDefault>
      <LoaderScreen
        messageStyle={{ color: Colors.$textNeutral }}
        message={"Message goes here"}
        color={Colors.$textNeutral}
      />
    </View>
  );
  return (
    <View gap-s5 centerV flex bg-$backgroundDefault>
      <TextField
        placeholder={"Placeholder"}
        floatingPlaceholder
        onChangeText={(text) => console.log(text)}
        enableErrors
        validateOnChange
        validate={["required", (value) => (value ? value.length > 6 : false)]}
        validationMessage={["Field is required", "Password is too short"]}
        showCharCounter
        maxLength={30}
      />
      {/* <WheelPicker
        items={[
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Maybe", value: "maybe" },
        ]}
        activeTextColor={Colors.blue40}
        initialValue={"yes"}
        onChange={() => console.log("changed")}
      /> */}

      <View style={{ width: 200, height: 200 }} bg-purple40 centerH>
        <View style={{ width: 60, height: 60 }} bg-green20 />
      </View>
      <Button label={"Press"} size={"medium"} bg-blue40 $textDefault />

      <ColorPalette
        colors={["transparent", Colors.green30, Colors.yellow30, Colors.red30]}
        // value={selectedColor}
        onValueChange={(clr) => console.log(clr)}
      />
    </View>
  );
}
