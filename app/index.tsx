import { colors } from "@/constants/theme"
import { router } from "expo-router"
import { useEffect } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const index = () => {

    useEffect(() => {
        setTimeout(() => {
            router.push('/welcome')
        }, 2000)
    }, [])

    return(
        <View style={s.container}>
            <Image 
                style={s.logo}
                resizeMode="contain"
                source={require("../assets/images/splashImage.png")}
            />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.neutral900
    },
    logo: {
        height: "20%",
        aspectRatio: 1,
    }
})

export default index