import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeaderTop}>Đăng ký</Text>
        <Text style={styles.textHeaderBottom}>Nhanh chóng và dễ dàng</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.group}>
          <View style={styles.groupInput}>
            <TextInput placeholder="Họ" style={styles.input1} />
            <TextInput placeholder="Tên" style={styles.input1} />
          </View>
          <TextInput placeholder="Số điện thoại di dộng" style={styles.input} />
          <TextInput
            autoComplete="password"
            secureTextEntry={true}
            placeholder="Mật khẩu"
            style={styles.input}
          />
          <View>
            <Picker style={styles.picker}>
              <Picker.Item style={styles.pickerItem} label="Nam" value="Nam" />
              <Picker.Item style={styles.pickerItem} label="Nữ" value="nữ" />
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    marginVertical: "15%",
  },
  textHeaderTop: {
    fontSize: 35,
    fontWeight: "700",
  },
  textHeaderBottom: {
    fontSize: 25,
  },
  body: {
    width: "80%",
  },
  group: {},
  groupInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input1: {
    width: "45%",
    height: 50,
    fontSize: 20,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  input: {
    height: 50,
    fontSize: 20,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  picker: {
    height: 60,
    fontSize: 20,
  },
  pickerItem: {},
});
