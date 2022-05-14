import { View, Text } from "react-native";
import React from "react";
import { AdMobRewarded } from "expo-ads-admob";
export default function AdScreen() {
  let unitId = "ca-app-pub-3940256099942544/5224354917";
  const loadAd = async () => {
    await AdMobRewarded.setAdUnitID(unitId);
    await AdMobRewarded.requestAdAsync()
};
  return (
    <View>
      <Text>AdScreen</Text>
    </View>
  );
}
