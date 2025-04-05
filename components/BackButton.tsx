import { BackButtonProps } from "@/types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Typo from "./Typo"
import { router } from "expo-router"
import { CaretLeft } from "phosphor-react-native"
import { verticalScale } from "@/utils/styling"
import { colors, radius } from "@/constants/theme"

const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={() => router.back()} style={[s.button, style]}>
      <CaretLeft 
        size={verticalScale(iconSize)}
        color={colors.white}
        weight="bold"
      />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
    button: {
        backgroundColor: colors.neutral600,
        alignSelf: "flex-start",
        borderRadius: radius._12,
        borderCurve: "continuous",
        padding: 5,
    }
});

export default BackButton;
