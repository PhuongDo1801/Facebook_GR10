import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function HomeItem({ name, time, textContent, Img, avatar }) {
  const [showMore, setShowMore] = useState(true);

  return (
    <View style={styles.homeItem}>
      <View style={styles.header}>
        <View style={styles.imageAvater}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.infor}>
          <Text style={styles.textInfor}>{name}</Text>
          <View>
            <Text>{time}h</Text>
          </View>
        </View>
        <View style={styles.setting}>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="black"
            style={styles.dotSetting}
          />
          <Feather name="x" size={22} color="black" style={styles.delete} />
        </View>
      </View>
      <View style={styles.content}>
        {Img === null ? (
          textContent.split(" ").length < 18 ? (
            <View style={styles.noImage}>
              <Text style={styles.textNoImage}>{textContent}</Text>
            </View>
          ) : (
            <View>
              <Text
                style={styles.textContent}
                numberOfLines={showMore ? 2 : 0}
                onPress={() => setShowMore(!showMore)}>
                {textContent}
              </Text>
            </View>
          )
        ) : (
          <View>
            <Text
              style={styles.textContent}
              numberOfLines={showMore ? 2 : 0}
              onPress={() => setShowMore(!showMore)}>
              {textContent}
            </Text>
            <View>
              <Image
                source={{
                  uri: Img,
                }}
                style={styles.groupImage}
              />
            </View>
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.headerFooter}>
          <View style={styles.countLike}>
            <EvilIcons name="like" size={22} color="black" />
            <Text>100</Text>
          </View>
          <Text style={styles.textComment}>45 bình luận</Text>
          <Text style={styles.textShare}>24 lượt chia sẻ</Text>
        </View>
        <View style={styles.bottomFooter}>
          <TouchableOpacity style={styles.groupItemFooter}>
            <AntDesign
              name="like2"
              size={24}
              color="#434144"
              style={styles.iconLike}
            />
            <Text style={styles.textIconFooter}>Thích</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItemFooter}>
            <FontAwesome5
              name="comment-alt"
              size={24}
              color="#434144"
              style={styles.iconComment}
            />
            <Text style={styles.textIconFooter}>Bình luận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.groupItemFooter}>
            <FontAwesome
              name="share"
              size={24}
              color="#434144"
              style={styles.iconShare}
            />
            <Text style={styles.textIconFooter}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const SCREEN_HEIGHT = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  homeItem: {},
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  infor: {
    flex: 1,
    marginLeft: 10,
  },
  textInfor: {
    fontSize: 17,
    fontWeight: "700",
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotSetting: {
    marginRight: 10,
  },
  //Content
  noImage: {
    height: 0.3 * SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7dc4ab",
  },
  textNoImage: {
    textAlign: "center",
    fontSize: 35,
    color: "#f6b26b",
    marginHorizontal: 15,
  },

  textContent: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  groupImage: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.35,
  },
  // Footer
  headerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  countLike: {
    flexDirection: "row",
  },
  bottomFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  groupItemFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  textIconFooter: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "300",
  },
});
