import { StyleSheet, Text, View } from "react-native";
import Typo from "./Typo";
import { HeaderProps } from "@/types";

const Header = ({ title = "", leftIcon, style }: HeaderProps) => {
  return (
    <View style={[s.container, style]}>
      {leftIcon && <View style={s.leftIcon}>{leftIcon}</View>}
      {title && (
        <Typo
          size={22}
          fontWeight={"600"}
          style={{
            textAlign: "center",
            width: leftIcon ? "82%" : "100%",
          }}
        >
          {title}
        </Typo>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width:"100%",
    alignItems: "center",
    flexDirection: "row",

  },
  leftIcon: {
    alignSelf: "flex-start"
  },
});

export default Header;
