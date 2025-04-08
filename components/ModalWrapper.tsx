import { colors, spacingX, spacingY } from "@/constants/theme"
import { ModalWrapperProps } from "@/types"
import { Platform, StyleSheet, Text, View } from "react-native";

const isIOS = Platform.OS === 'ios';

const ModalWrapper = ({
    style,
    children,
    bg = colors.neutral800
} : ModalWrapperProps) => {
  return (
    <View style={[s.container, {backgroundColor: bg}, style && style]}>
      {children}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isIOS ? spacingY._15 : 20,
    paddingBottom: isIOS ? spacingY._20 : spacingX._10,
  }
});

export default ModalWrapper;