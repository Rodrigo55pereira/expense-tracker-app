import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { useAuth } from "@/contexts/authContext";
import { getProfileImage } from "@/service/ImageService"
import { verticalScale } from "@/utils/styling";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const { user } = useAuth();
  return (
    <ScreenWrapper>
      <View style={s.container}>
        {/* Header */}
        <Header title="Profile" style={{ marginVertical: spacingY._10 }} />

        {/* user info */}
        <View style={s.userInfo}>
          {/* avatar */}
          <View>
            {/* user image */}
            <Image
              source={getProfileImage(user?.image)}
              style={s.avatar}
              contentFit="cover"
              transition={100}
            />
          </View>
          {/* name & email */}
          <View style={s.nameContainer}>
            <Typo size={24} fontWeight={"600"} color={colors.neutral100}>
              {user?.name}
            </Typo>
            <Typo size={15} color={colors.neutral400}>
              {user?.email}
            </Typo>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
  },
  userInfo: {
    marginTop: verticalScale(30),
    alignItems: "center",
    gap: spacingY._15,
  },
  nameContainer: {
    gap: verticalScale(4),
    alignItems: "center",
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: colors.neutral300,
    height: verticalScale(135),
    width: verticalScale(135),
    borderRadius: 200,
  },
});

export default Profile;
