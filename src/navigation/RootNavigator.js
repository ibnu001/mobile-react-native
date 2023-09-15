import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/LoginScreen/Login"
import LoginScreen from "../screens/LoginScreen/LoginScreen"
import SplashScreen from "../screens/SplashScreen/SplashScreen"
import { Tokonyadia } from '../screens/TokonyadiaScreen/Tokonyadia'
import TokonyadiaScreen from "../screens/TokonyadiaScreen/TokonyadiaScreen"
import LoginService from "../services/LoginService"
import ProductService from "../services/ProductService"
import PATH from "./NavigationPath"
import { navigationRef } from "./RootNavigation"

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>

            <Stack.Navigator initialRouteName={PATH.SPLASH}>

                <Stack.Screen
                    name={PATH.SPLASH}
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name={PATH.LOGIN}
                    options={{ headerShown: false }}
                >
                    {() => <LoginScreen login={() => Login(LoginService)} />}
                </Stack.Screen>

                <Stack.Screen
                    name={PATH.TOKONYADIA}
                    options={{ headerShown: false }}
                >
                    {() => <TokonyadiaScreen product={() => Tokonyadia(ProductService)} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation