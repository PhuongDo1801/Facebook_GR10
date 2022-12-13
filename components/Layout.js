import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Layout = ({ children }) => {
  const [selected, setSelected] = useState(false);
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
              onPress={() => setSelected("home")}
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
              onPress={() => setSelected("user-friends")}
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
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentHeader: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
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
    marginRight: 10,
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
});

export default Layout;
