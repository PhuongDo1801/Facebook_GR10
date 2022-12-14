import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import FriendItem from "./components/FriendItem";
import Friend from "./screen/friends/Friend";


export default function App() {
  return (
    <SafeAreaView>
      <Friend />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
