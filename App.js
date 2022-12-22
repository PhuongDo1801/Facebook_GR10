import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screen/login/Login";
import Register from "./screen/register/Register";
import Layout from "./components/Layout";
import Home from "./screen/home/Home";
import Messenger from "./screen/messenger/Messenger";
import Friend from "./components/FriendItem1";
import FriendInvite from "./screen/friends/FriendInvite";
import SuggestionFriend from "./screen/friends/SuggestionFriend";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Messenger" component={Messenger} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Friend" component={Friend} />
        <Stack.Screen name="FriendInvite" component={FriendInvite} />
        <Stack.Screen name="SuggestionFriend" component={SuggestionFriend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
