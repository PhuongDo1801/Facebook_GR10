import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Messenger from "./screen/messenger/Messenger"
export default function App() {
  return (
    <View style={styles.container}>
      <Messenger/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
