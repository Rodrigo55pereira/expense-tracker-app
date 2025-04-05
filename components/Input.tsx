import { StyleSheet, TextInput, View } from "react-native";

import { InputProps } from "@/types";
import { colors, radius, spacingX } from "@/constants/theme"
import { verticalScale } from "@/utils/styling"

const Input = (props: InputProps) => {
  return (
    <View style={[s.container, props.containerStyle && props.containerStyle]}>
        {
            props.icon && props.icon
        }
      <TextInput style={[s.input, props.inputStyle]} 
        placeholderTextColor={colors.neutral400}
        ref={props.inputRef && props.inputRef}
        { ...props }
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: verticalScale(64),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: radius._17,
    borderCurve: 'continuous',
    paddingHorizontal: spacingX._15,
    gap:spacingX._10,
  },
  input: {
    flex: 1,
    color: colors.white,
    fontSize: verticalScale(14),
  },
});

export default Input;
