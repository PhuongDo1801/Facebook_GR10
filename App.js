import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screen/login/Login";
import Register from "./screen/register/Register";
import Layout from "./components/Layout";
import Home from "./screen/home/Home";
import Messenger from "./screen/messenger/Messenger";
import Friend from "./screen/friends/Friend";
import FriendInvite from "./screen/friends/FriendInvite";
import SuggestionFriend from "./screen/friends/SuggestionFriend";
import Notification from "./screen/notification/Notification";
import Information from "./screen/information/Information";
import Menu from "./screen/menu/Menu";
import OtpPhone from "./screen/otpPhone/OtpPhone";
import AddPost from "./screen/posts/AddPost";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Messenger" component={Messenger} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Friend" component={Friend} />
        <Stack.Screen name="FriendInvite" component={FriendInvite} />
        <Stack.Screen name="SuggestionFriend" component={SuggestionFriend} />
        <Stack.Screen name="Layout" component={Layout} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="OtpPhone" component={OtpPhone} />
        <Stack.Screen name="AddPost" component={AddPost} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
