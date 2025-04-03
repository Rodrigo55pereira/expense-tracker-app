import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/types";
import { Dimensions, Platform, StatusBar, Text, View } from "react-native";
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
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
