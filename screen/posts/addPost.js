import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { ImagePicker } from "expo-image-multiple-picker";
import ThreePicture from "../../components/ThreePicture";
import TwoPicture from "../../components/TwoPicture";
import FourPicture from "../../components/FourPicture";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AddPost() {
  const [vertical, setVertical] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const closeImagePicker = (assets) => {
    setSelectedImages([...assets]);
    setShowImagePicker(false);
  };

  const ImagePickerContainer = () => {
    return (
      <View style={styles.imagePickerContainer}>
        <ImagePicker
          onSave={(assets) => closeImagePicker(assets)}
          onCancel={() => setShowImagePicker(false)}
          multiple
          limit={4}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showImagePicker && <ImagePickerContainer />}
      <View style={styles.contentHeader}>
        <View style={styles.contentHeaderLeft}>
          <AntDesign name="arrowleft" size={28} color="black" />
          <Text style={styles.textHeader}>Tạo bài viết</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>ĐĂNG</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentBody}>
        <View style={styles.headerBody}>
          <View style={styles.imageAvater}>
            <Image
              source={{
                uri: "https://haycafe.vn/wp-content/uploads/2022/07/anh-wibu-co-gai-va-mat-na-cao.jpg",
              }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.infor}>
            <Text style={styles.textInfor}>Pham Minh</Text>
            <TouchableOpacity style={styles.inforBottom}>
              <FontAwesome5 name="user-friends" size={16} color="#666" />
              <Text style={styles.textinforBottom}>Bạn bè</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.betweenBody}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            placeholder={
              selectedImages !== []
                ? "Hãy nói gì về bức ảnh này"
                : "Bạn đang nghĩ gì? "
            }
          />
        </View>
        <View>
          {selectedImages.length === 3 ? (
            <ThreePicture selectedImages={selectedImages} />
          ) : selectedImages.length === 2 ? (
            <TwoPicture selectedImages={selectedImages} />
          ) : selectedImages.length === 4 ? (
            <FourPicture selectedImages={selectedImages} />
          ) : selectedImages.length === 1 ? (
            <Image
              source={{ uri: selectedImages[0].uri }}
              style={styles.picture}
            />
          ) : (
            ""
          )}
        </View>
      </View>
      <View style={styles.footer}>
        {vertical ? (
          <View style={styles.iconFooterCol}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => setShowImagePicker((pre) => !pre)}>
              <Ionicons
                name="md-images"
                size={24}
                color="green"
                style={styles.icon}
              />
              <Text>Ảnh/video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Entypo
                name="emoji-happy"
                size={24}
                color="#F5C33B"
                style={styles.icon}
              />
              <Text>Cảm xúc/Hoạt động</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Entypo
                name="camera"
                size={24}
                color="#0091ff"
                style={styles.icon}
              />
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => setVertical(!vertical)}>
              <MaterialCommunityIcons
                name="dots-horizontal-circle"
                size={24}
                color="#555"
                style={styles.icon}
              />
              <Text>Ẩn</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.iconFooter}>
            <TouchableOpacity onPress={() => setShowImagePicker((pre) => !pre)}>
              <Ionicons name="md-images" size={24} color="green" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="emoji-happy" size={24} color="#F5C33B" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="camera" size={24} color="#0091ff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVertical(!vertical)}>
              <MaterialCommunityIcons
                name="dots-horizontal-circle"
                size={24}
                color="#555"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const SCREEN_WIDTH = Math.round(Dimensions.get("window").width);
const SCREEN_HEIGHT = Math.round(Dimensions.get("window").height);

const marginFootter = SCREEN_HEIGHT > 750 ? 25 : 45;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    flex: 1,
  },
  contentHeader: {
    marginTop: 20,
    width: SCREEN_WIDTH,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  textHeader: {
    marginLeft: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#ccc",
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 7,
  },
  textButton: {
    opacity: 0.4,
    fontWeight: "600",
  },
  // Body
  contentBody: {
    width: SCREEN_WIDTH,
  },
  headerBody: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textInfor: {
    fontSize: 15,
    fontWeight: "600",
  },
  inforBottom: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 2,
  },
  textinforBottom: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: "700",
    color: "#666",
  },

  //Body Thân body
  betweenBody: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 22,
    marginRight: 10,
    fontWeight: "300",
  },

  //Body Footer
  footer: {
    width: SCREEN_WIDTH,
    position: "absolute",
    borderTopWidth: 0.5,
    borderTopColor: "#666",
    bottom: 0,
    backgroundColor: "#fff",
  },
  iconFooter: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  //colum
  iconFooterCol: {
    flexDirection: "column",
  },
  item: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#666",
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },

  imagePickerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    zIndex: 9,
  },
});

export default AddPost;
