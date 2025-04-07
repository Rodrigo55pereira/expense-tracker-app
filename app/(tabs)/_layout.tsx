import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

import CustomTabs from "@/components/CustomTabs"

const _layout = () => {
  return (
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="statistics" />
      <Tabs.Screen name="wallet" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

const s = StyleSheet.create({});

export default _layout;
