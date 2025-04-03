import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/types";
import {  StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.neutral900,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
