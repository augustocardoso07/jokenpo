import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Rules from "./pages/Rules";

export type RouteParams = {
    Home: undefined;
    Rules: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen
                    name='Rules'
                    component={Rules}
                    options={{ animation: "slide_from_left" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
