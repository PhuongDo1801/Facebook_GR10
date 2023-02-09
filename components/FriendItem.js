import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function FriendItem({ avatar, username, mutual, text }) {
  const confirm = async (values) => {
    let options = {
      is_accept: values,
    };
    const token = await AsyncStorage.getItem("id_token");
    return fetch(
      "https://severfacebook.up.railway.app/api/v1/friends/set-accept",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: "token " + token,
        },
        body: JSON.stringify(options),
      }
    )
      .then((response) => {
        const statusCode = response.status;
        if (statusCode === 200) {
        } else {
          alert("Sever lag");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemFriend}>
        <Image source={{ uri: avatar }} style={styles.image} />
        <View style={styles.user}>
          <Text style={styles.textName}>{username}</Text>
          {/* <Text style={styles.textFr}>{mutual} bạn chung</Text> */}
          <View style={styles.areaButton}>
            <TouchableOpacity
              style={styles.buttonA}
              onPress={() => confirm("1")}>
              <Text style={styles.textA}>{text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonB} onPress={() => confirm(1)}>
              <Text style={styles.textB}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const SCREEN_HEIGHT = Math.round(Dimensions.get("window").height);
const SCREEN_WEIGHT = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  itemFriend: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  //user
  image: {
    width: 90,
    height: 90,
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
  buttonA: {
    marginVertical: 5,
    backgroundColor: "#1877f2",
    paddingTop: 8,
    alignItems: "center",
    borderRadius: 8,
    width: (SCREEN_WEIGHT - 140) / 2,
  },

  buttonB: {
    marginVertical: 5,
    backgroundColor: "#ccc",
    paddingVertical: 8,
    marginLeft: 10,
    alignItems: "center",
    borderRadius: 8,
    width: (SCREEN_WEIGHT - 140) / 2,
  },

  textA: {
    color: "#fff",
    fontSize: 18,
  },
  textB: {
    fontSize: 18,
  },
});
