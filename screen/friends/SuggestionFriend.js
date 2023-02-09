import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FriendItem from "../../components/FriendItem";
import Layout from "../../components/Layout";

export default function SuggestionFriend({ route }) {
  const navigation = useNavigation();
  const messengers = [
    {
      id: 1,
      fullname: "Trinh Dat",
      name: "Dat",
      avatar: "https://reactnative.dev/img/tiny_logo.png",
      mutual: 1,
    },

    {
      id: 2,
      fullname: "Pham Dinh Minh",
      name: "Minh",
      avatar:
        "https://gamek.mediacdn.vn/2019/10/20/photo-1-1571521922264714072244.jpg",
      mutual: 1,
    },

    {
      id: 4,
      fullname: "Do Dang Phuong",
      name: "Phuong",
      avatar: "https://i.ytimg.com/vi/dkvaprtP6L8/maxresdefault.jpg",
      mutual: 3,
    },

    {
      id: 5,
      fullname: "Ho Duc Han",
      name: "Han",
      avatar:
        "https://cdna.artstation.com/p/assets/images/images/019/387/690/large/inward-vertical-city.jpg?1563272711",
      mutual: 20,
    },

    {
      id: 6,
      fullname: "Chien Hoang Van",
      name: "Hoang",
      avatar:
        "https://www.ebtc.ie/wp-content/uploads/2017/10/bigstock-Autumn-Fall-scene-Beautiful-150998720.jpg",
      mutual: 6,
    },

    {
      id: 3,
      fullname: "Vu Ba Luong",
      name: "Luong",
      avatar:
        "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",
      mutual: 2,
    },

    {
      id: 7,
      fullname: "Le Thi Giang",
      name: "Giang",
      avatar:
        "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      mutual: 5,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonReturn}>
          <Ionicons
            name="arrow-back"
            size={28}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Gợi ý</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.invite}>
          <Text style={styles.textInvite}>Những người bạn có thể biết</Text>
        </View>
        <View style={styles.listFriend}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {messengers.map((Friend, index) => (
              <View style={styles.friend} key={index}>
                <FriendItem
                  avatar={Friend.avatar}
                  mutual={Friend.mutual}
                  username={Friend.fullname}
                  text={"Thêm bạn bè"}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  textHeader: {
    marginLeft: 5,
    fontSize: 18,
  },
  //body
  body: {
    paddingHorizontal: 15,
  },
  invite: {
    paddingTop: 15,
  },
  textInvite: {
    fontSize: 20,
    fontWeight: "bold",
  },
  option: {
    flexDirection: "row",
    paddingBottom: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },

  button: {
    marginTop: 10,
    backgroundColor: "#ccc",
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 5,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
