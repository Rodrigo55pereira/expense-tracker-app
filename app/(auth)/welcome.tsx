import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Welcome = () => {
  return (
    <ScreenWrapper>
      <View style={s.container}>
        {/* login button & image */}
        <View>
          <TouchableOpacity style={s.loginButton}>
            <Typo fontWeight={"500"}>Sign in</Typo>
          </TouchableOpacity>
          <Image
            source={require("../../assets/images/welcome.png")}
            style={s.welcomeImage}
          />
        </View>
        {/* footer */}
        <View style={s.footer}>
            <View style={{alignItems: "center"}}>
                <Typo size={30} fontWeight={"800"}>Always take control</Typo>
                <Typo size={30} fontWeight={"800"}>of your finances</Typo>
            </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
});

export default Welcome;
