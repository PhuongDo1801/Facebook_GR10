import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./screen/login/Login";
import Register from "./screen/register/Register";

export default function App() {
  return (
    <SafeAreaView>
      <Register />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
