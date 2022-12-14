import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout({ children }) {
  const [selected, setSelected] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHeader}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>facebook</Text>
          <View style={styles.group}>
            <AntDesign
              name="plus"
              size={20}
              color="black"
              style={styles.iconHeader}
            />
            <Feather
              name="search"
              size={20}
              color="black"
              style={styles.iconHeader}
            />

            <FontAwesome5
              name="facebook-messenger"
              size={20}
              color="black"
              style={styles.iconHeader}
              onPress={() => {
                enableScreens(false);
                navigation.navigate("Messenger");
              }}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View
            style={{
              borderBottomWidth: selected === "home" ? 1 : 0,
              borderColor: selected === "home" ? "#0066ff" : "#000",
            }}>
            <FontAwesome5
              name="home"
              size={28}
              color={selected === "home" ? "#1877f2" : "#000"}
              style={styles.iconBody}
              onPress={() => {
                navigation.navigate("Home");
                setSelected("home");
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: selected === "user-friends" ? 1 : 0,
              borderColor: selected === "user-friends" ? "#0066ff" : "#000",
            }}>
            <FontAwesome5
              name="user-friends"
              size={28}
              color={selected === "user-friends" ? "#1877f2" : "#000"}
              style={styles.iconBody}
              onPress={() => {
                setSelected("user-friends");

                navigation.navigate("FriendInvite");
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: selected === "user" ? 1 : 0,
              borderColor: selected === "user" ? "#0066ff" : "#000",
            }}>
            <FontAwesome
              name="user-circle-o"
              size={28}
              color={selected === "user" ? "#1877f2" : "#000"}
              style={styles.iconBody}
              onPress={() => setSelected("user")}
            />
          </View>
          <View
            style={{
              borderBottomWidth: selected === "bell" ? 1 : 0,
              borderColor: selected === "bell" ? "#0066ff" : "#000",
            }}>
            <FontAwesome
              name="bell"
              size={28}
              color={selected === "bell" ? "#1877f2" : "#000"}
              style={styles.iconBody}
              onPress={() => setSelected("bell")}
            />
          </View>
          <View
            style={{
              borderBottomWidth: selected === "bars" ? 1 : 0,
              borderColor: selected === "bars" ? "#0066ff" : "#000",
            }}>
            <FontAwesome
              name="bars"
              size={28}
              color={selected === "bars" ? "#1877f2" : "#000"}
              style={styles.iconBody}
              onPress={() => setSelected("bars")}
            />
          </View>
        </View>
      </View>
      <View style={styles.contentBody}>{children}</View>
    </SafeAreaView>
  );
}

const SCREEN_WIDTH = Math.round(Dimensions.get("window").width);
const SCREEN_HEIGHT = Math.round(Dimensions.get("window").height);

const marginy = SCREEN_HEIGHT > 700 ? 3.5 : 0;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#ccc",
  },
  contentHeader: {
    position: "absolute",
    width: SCREEN_WIDTH,
    paddingTop: Math.round(StatusBar.currentHeight),
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    marginBottom: 10,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: "900",
    color: "#1877f2",
  },
  group: {
    flexDirection: "row",
  },
  iconHeader: {
    alignItems: "center",
    backgroundColor: "#ccc",
    borderRadius: 1000,
    marginRight: 5,
    padding: 5,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconBody: {
    borderRadius: 100,
    padding: 10,
    // paddingBottom: 8,
  },
  contentBody: {
    top: Math.round(StatusBar.currentHeight) + 105.5 + marginy,
  },
});
