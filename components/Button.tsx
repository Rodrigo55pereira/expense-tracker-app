import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CustomButtonProps } from "@/types";
import { colors, radius } from "@/constants/theme"
import { verticalScale } from "@/utils/styling"
import Loading from "./Loading"

const Button = ({
  style,
  onPress,
  loading = false,
  children,
}: CustomButtonProps) => {
  if(loading){
    return(
        <View style={[s.button, style, {backgroundColor: "transparent"}]}>
            {/* loading */}
            <Loading/>
        </View>
    )
  }
  return (
    <TouchableOpacity onPress={onPress} style={[s.button, style]}>
      {children}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius._17,
        borderCurve: "continuous",
        height: verticalScale(52),
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Button;
