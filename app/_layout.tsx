import { AuthProvider } from "@/contexts/authContext"
import { Stack } from "expo-router"
import { StatusBar } from "react-native"

const RootLayout = () => {
    return(
      <AuthProvider>
        <StatusBar barStyle="light-content" />
        <Stack screenOptions={{ headerShown: false }}></Stack>  
      </AuthProvider>
    )
}

export default RootLayout