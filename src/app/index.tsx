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
