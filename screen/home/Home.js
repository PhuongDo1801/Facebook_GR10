import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import HomeItem from "../../components/HomeItem";

function Home({ navigation, route }) {
  const Items = [
    {
      name: "Trịnh Đạt",
      time: 1,
      content: {
        text:
          "Chào các bạn, Tôi là Trinh Đạt tôi xin giới thiệu với mọi " +
          "người sơ qua về bản thân của mình như sau: Tôi là một người học " +
          "giỏi, tôi rất tự tin về bản thân của mình, một người mà có thể " +
          "nhìn thấy chuyển động của vạn vật, nghe được tiếng nghe của không" +
          "gian và thời gian. Không nói điêu nhưng tôi là một người như thế " +
          "một người có tầm sũy nghĩ quá lơn. Đã từng gần được thủ khoa vào ngành cntt này và hiện tại CPA đang là 3.9 " +
          "Nói sơ qua về bản thân vậy thôi cảm ơn mọi người đã đọc",
        Img: "https://demoda.vn/wp-content/uploads/2022/01/anh-wibu.jpg",
      },
      avatar: "https://demoda.vn/wp-content/uploads/2022/01/anh-wibu.jpg",
    },

    {
      name: "Phạm Đinh Minh",
      time: 2,
      content: {
        text: "Chao một ngày mới bình yên nha",
        Img: "https://gamek.mediacdn.vn/2019/10/20/photo-1-1571521922264714072244.jpg",
      },
      avatar:
        "https://gamek.mediacdn.vn/2019/10/20/photo-1-1571521922264714072244.jpg",
    },

    {
      name: "Đỗ Đặng Phương",
      time: 1.5,
      content: {
        text: "Chao một ngày mới bình yên nha",
        Img: "https://i.ytimg.com/vi/dkvaprtP6L8/maxresdefault.jpg",
      },
      avatar: "https://i.ytimg.com/vi/dkvaprtP6L8/maxresdefault.jpg",
    },

    {
      name: "Hồ Đức Hân",
      time: 2,
      content: {
        text: "Chao một ngày mới bình yên nha",
        Img: "https://cdna.artstation.com/p/assets/images/images/019/387/690/large/inward-vertical-city.jpg?1563272711",
      },
      avatar:
        "https://cdna.artstation.com/p/assets/images/images/019/387/690/large/inward-vertical-city.jpg?1563272711",
    },

    {
      name: "Chiến Hoàng Văn",
      time: 3,
      content: {
        text: "Chao một ngày mới bình yên nha",
        Img: "https://www.ebtc.ie/wp-content/uploads/2017/10/bigstock-Autumn-Fall-scene-Beautiful-150998720.jpg",
      },
      avatar:
        "https://www.ebtc.ie/wp-content/uploads/2017/10/bigstock-Autumn-Fall-scene-Beautiful-150998720.jpg",
    },

    {
      name: "Vũ Bá Lượng",
      time: 4,
      content: {
        text: "Chao một ngày mới bình yên nha",
        Img: "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",
      },
      avatar:
        "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",
    },

    {
      name: "Lê Thị Giang",
      time: 3,
      content: {
        text: "Chao một ngày mới bình yên nha oke bạn ơi !",
        Img: null,
      },
      avatar:
        "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",
    },
  ];

  return (
    <Layout route={route.name}>
      <ScrollView style={styles.container}>
        <View style={styles.infor}>
          <View style={styles.imageAvatar}>
            <Image
              source={{
                uri: "https://i.ytimg.com/vi/JMisfp3ykM4/maxresdefault.jpg",
              }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.search}>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => navigation.navigate("AddPost")}>
              <Text style={styles.textSearch}>Bạn đang nghĩ gì?</Text>
            </TouchableOpacity>
          </View>
          <FontAwesome5 name="images" size={24} color="green" />
        </View>
        {Items.map((Item, index) => (
          <View style={styles.body} key={index}>
            <HomeItem
              name={Item.name}
              time={Item.time}
              textContent={Item.content.text}
              Img={Item.content.Img}
              avatar={Item.avatar}
            />
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 130,
  },
  infor: {
    height: 60,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#ccc",
    marginHorizontal: 10,
    justifyContent: "center",
  },
  searchButton: {},
  textSearch: {
    paddingVertical: 7,
    paddingLeft: 20,
    fontSize: 18,
  },
  body: {
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  textbody: {
    backgroundColor: "#000",
    marginTop: 1000,
  },
});

export default Home;
