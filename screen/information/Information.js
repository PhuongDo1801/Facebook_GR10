import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeItem from "../../components/HomeItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Information({ navigation, route }) {
  return (
    <Layout route={route.name}>
      <ScrollView style={styles.container}>
        <View style={styles.inforHeader}>
          <View style={styles.groupImage}>
            <ImageBackground
              source={{
                uri: "https://www.ebtc.ie/wp-content/uploads/2017/10/bigstock-Autumn-Fall-scene-Beautiful-150998720.jpg",
              }}
              style={styles.image}>
              <Image
                source={{
                  uri: "https://i.ytimg.com/vi/JMisfp3ykM4/maxresdefault.jpg",
                }}
                style={styles.avatar}
              />
              <FontAwesome5
                name="camera"
                size={28}
                color="black"
                style={styles.camera}
              />
            </ImageBackground>
          </View>
          <View style={styles.inforContent}>
            <Text style={styles.textFullName}>Phạm Minh</Text>
            <View>
              <TouchableOpacity style={styles.buttonVideo}>
                <EvilIcons name="plus" size={24} color="#fff" />
                <Text style={styles.textButtonVideo}>Thêm vào tin</Text>
              </TouchableOpacity>
              <View style={styles.itemProfile}>
                <TouchableOpacity style={styles.editProfile}>
                  <MaterialIcons name="edit" size={24} color="black" />
                  <Text style={styles.textEditProfile}>
                    Chỉnh sửa trang cá nhân
                  </Text>
                </TouchableOpacity>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={24}
                  color="black"
                  style={styles.iconDot}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const SCREEN_HEIGHT = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  groupImage: {
    height: 0.2 * SCREEN_HEIGHT + 150,
  },
  image: {
    height: 0.3 * SCREEN_HEIGHT,
  },
  avatar: {
    borderRadius: 200,
    borderWidth: 5,
    borderColor: "#fff",
    width: 200,
    height: 200,
    marginLeft: 10,
    marginTop: 0.1 * SCREEN_HEIGHT,
    position: "relative",
  },
  camera: {
    position: "absolute",
    top: 0.3 * SCREEN_HEIGHT,
    left: 160,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#ccc",
  },
  inforContent: {
    marginHorizontal: 10,
  },
  textFullName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  buttonVideo: {
    flexDirection: "row",
    backgroundColor: "#0066ff",
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 10,
  },
  textButtonVideo: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 5,
  },
  itemProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editProfile: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ccc",
    marginRight: 10,
    borderRadius: 5,
  },
  textEditProfile: {
    marginLeft: 5,
    fontSize: 16,
  },
  iconDot: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
});
