import { colors } from "@/constants/theme"
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, View } from "react-native"

const Loading = ({size="large", color = colors.primary}: ActivityIndicatorProps) => {
    return(
        <View style={s.container}>
            <ActivityIndicator size={size}  color={color} />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Loading