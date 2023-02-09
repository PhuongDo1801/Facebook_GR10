import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function Friend({ avatar, username, mutual, id, cover_image }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.content}
          onPress={() =>
            navigation.navigate("InforFriend", {
              avatar: avatar,
              idUser: id,
              username: username,
              cover_image: cover_image,
            })
          }>
          <Image source={{ uri: avatar }} style={styles.image}></Image>
          <View style={styles.user}>
            <Text style={styles.textName}>{username}</Text>
            <Text style={styles.textFr}>{mutual} bạn chung</Text>
          </View>
        </TouchableOpacity>
        <AntDesign name="delete" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  user: {
    paddingLeft: 10,
  },
  textName: {
    fontSize: 18,
    fontWeight: "600",
  },

  areaButton: {
    flexDirection: "row",
  },
});
