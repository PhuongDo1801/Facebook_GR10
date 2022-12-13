import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="facebook-official" size={90} color="#1877f2" />
      </View>
      <View style={styles.body}>
        <View style={styles.inputForm}>
          <TextInput
            style={styles.input}
            placeholder="Số Điện Thoại"
            keyboardType="numeric"
          />
          <TextInput
            autoCapitalize="none"
            autoComplete="password"
            secureTextEntry={true}
            placeholder="Mật khẩu"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Đăng Nhập</Text>
        </TouchableOpacity>
        <View style={styles.seperate}>
          <View style={styles.itemSeperate}></View>
          <Text>hoặc</Text>
          <View style={styles.itemSeperate}></View>
        </View>
      </View>
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.textFooter}>Tạo tài khoản Facebook mới</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    justifyContent: "center",
    paddingVertical: "20%",
  },
  body: {
    width: "80%",
  },
  input: {
    height: 50,
    fontSize: 20,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  button: {
    marginVertical: 25,
    backgroundColor: "#1877f2",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
  seperate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  itemSeperate: {
    backgroundColor: "#000",
    height: 2,
    width: "43%",
  },
  footer: {
    backgroundColor: "#42B72A",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  textFooter: {
    fontSize: 15,
    color: "#fff",
  },
});
