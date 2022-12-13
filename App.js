import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screen/login/Login";
import Register from "./screen/register/Register";
import Layout from "./components/Layout";
import Home from "./screen/home/Home";

export default function App() {
  // const Stack = createNativeStackNavigator();

  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
// <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="Login" component={Login} />
//     <Stack.Screen name="Register" component={Register} />
//   </Stack.Navigator>
// </NavigationContainer>
