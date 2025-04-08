import BackButton from "@/components/BackButton"
import Header from "@/components/Header"
import ModalWrapper from "@/components/ModalWrapper"
import ScreenWrapper from "@/components/ScreenWrapper"
import { spacingY } from "@/constants/theme"
import { StyleSheet, Text, View } from "react-native";

const ProfileModal = () => {
  return (
    <ModalWrapper>
      <View style={s.container}>
        <Header title="Update profile" leftIcon={<BackButton/>} />
      </View>
    </ModalWrapper>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: spacingY._20,
  }
});

export default ProfileModal;