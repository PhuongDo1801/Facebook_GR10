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
  Switch,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeItem from "../../components/HomeItem";

export default function Information({ navigation, route }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Layout route={route.name}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.back}>
            <Ionicons
              name="arrow-back-sharp"
              size={20}
              color="black"
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.textHeader}>Menu</Text>
          </View>
          <View style={styles.group}>
            <Feather
              name="search"
              size={20}
              color="black"
              style={styles.iconHeader}
            />
          </View>
        </View> 
        <View>
        <TouchableOpacity style={styles.profile}>
          <Image style={styles.avt} source={{ uri:"https://reactnative.dev/img/tiny_logo.png"  }}></Image>
          <View style={styles.user}>
            <Text style={styles.name}>Trịnh Đạt</Text>
            <Text style={styles.mes}>Xem trang cá nhân của bạn</Text>
          </View>
        </TouchableOpacity>
      </View> 
      <View
        style={{
          width: '90%',
          height: 2,
          backgroundColor: "#cccccc",
          marginTop: 10,
          marginLeft:'5%',
        }}
      />
      <View>
        <TouchableOpacity style={styles.itemset}>
          <Image style={styles.settingimg} source={{ uri:"https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=w240-h480-rw"  }}></Image>
          <Text style={styles.nameset}>Tin nhắn</Text>
        </TouchableOpacity>
      </View> 
      <View>
        <TouchableOpacity style={styles.itemset}>
          <Image style={styles.settingimg} source={{ uri:"https://icon-library.com/images/group-icon-png/group-icon-png-15.jpg"  }}></Image>
          <Text style={styles.nameset}>Nhóm</Text>
        </TouchableOpacity>
      </View> 
      <View>
        <TouchableOpacity style={styles.itemset}>
          <Image style={styles.settingimg} source={{ uri:"https://www.nicepng.com/png/full/62-623833_facebook-messenger-instant-video-linkedin-circle-logo-transparent.png"  }}></Image>
          <Text style={styles.nameset}>Video</Text>
        </TouchableOpacity>
      </View> 
      <View>
        <TouchableOpacity style={styles.itemset}>
          <Image style={styles.settingimg} source={{ uri:"https://cdn.shopify.com/app-store/listing_images/8b74e59f367bfafc59f6a4580630f882/icon/CPqWiLf0lu8CEAE=.png"  }}></Image>
          <Text style={styles.nameset}>Đã lưu</Text>
        </TouchableOpacity>
      </View> 
      <View>
        <TouchableOpacity style={styles.itemset}>
          <Image style={styles.settingimg} source={{ uri:"https://img.lovepik.com/free-png/20210926/lovepik-lock-icon-png-image_401486789_wh1200.png"  }}></Image>
          <Text style={styles.nameset}>Đổi mật khẩu</Text>
        </TouchableOpacity>
      </View> 
      <View>
        <TouchableOpacity style={styles.itemset}>
          <Image style={styles.settingimg} source={{ uri:"https://www.iconsdb.com/icons/preview/gray/moon-4-xxl.png"  }}></Image>
          <Text style={styles.nameset}>Chế độ tối</Text>
          <View style={styles.switch}>
        <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#cccccc" : "#cccccc"}
          ios_backgroundColor="#cccccc"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        </View>
      </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.itemset}>
          <Image style={styles.settingimg} source={{ uri:"http://ttdesignco.com/assets/img/common/logout.png"  }}></Image>
          <Text style={styles.nameset}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>  
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 130,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  back: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
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
  profile: {
    marginTop: -4,
    flexDirection: "row",
    width: "100%",
  },
  avt: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  user: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  mes: {
    textAlign: "left",
    marginTop: 8,
    fontSize: 17,
    opacity: 0.9,
  },
  itemset: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
  },
  settingimg: {
    marginLeft: 10,
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  nameset: {
    textAlign: "left",
    marginLeft: 10,
    marginTop: 5,
    fontSize: 20,
    opacity: 0.9,
  },
  switch: {
    flex: 1,
    marginTop: -10,
  },
});
