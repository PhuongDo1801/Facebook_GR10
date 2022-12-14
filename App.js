import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Friends from "./screen/friends/Friend";
import FriendInvite from "./screen/friends/FriendInvite";
import SuggestionFriend from "./screen/friends/SuggestionFriend";


export default function App() {
  return (
    <SafeAreaView>
      <SuggestionFriend/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
