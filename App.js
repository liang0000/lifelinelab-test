import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import FriendDetailScreen from "./pages/FriendDetailScreen";
import HomeScreen from "./pages/HomeScreen";
import LogInScreen from "./pages/LogInScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="logInScreen">
          <Stack.Screen
            name="logInScreen"
            component={LogInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="homeScreen"
            component={HomeScreen}
            options={{ headerShown: false, title: "Home" }}
          />
          <Stack.Screen
            name="friendDetailScreen"
            component={FriendDetailScreen}
            options={{ title: "Friend's Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
