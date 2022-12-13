import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("Nam");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Ngày Sinh");
  const [visible, setVisible] = useState(false);

  const change = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
  };

  const showMode = (currentDate) => {
    setShow(true);
    setMode(currentDate);
  };

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
          <View style={styles.inputPass}>
            <TextInput
              autoComplete="password"
              secureTextEntry={visible === false ? true : false}
              placeholder="Mật khẩu"
              style={styles.input}
            />
            {visible ? (
              <FontAwesome
                name="eye"
                size={24}
                color="black"
                style={styles.iconEye}
                onPress={() => setVisible(!visible)}
              />
            ) : (
              <FontAwesome
                name="eye-slash"
                size={24}
                color="black"
                style={styles.iconEye}
                onPress={() => setVisible(!visible)}
              />
            )}
          </View>
          <TouchableOpacity
            onPress={() => showMode("date")}
            style={styles.date}>
            <Text style={styles.textDate}>{text}</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="DateTimePicker"
              value={date}
              mode={mode}
              display="default"
              onChange={change}
            />
          )}
          <View style={styles.picker}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item style={styles.pickerItem} label="Nam" value="Nam" />
              <Picker.Item style={styles.pickerItem} label="Nữ" value="nữ" />
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const screenHeight =
  Math.round(Dimensions.get("window").height) > 700
    ? 700
    : Math.round(Dimensions.get("window").height);
const marginx =
  Math.round(Dimensions.get("window").height) > 700
    ? (Math.round(Dimensions.get("window").height) - 700) / 3
    : 0;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: screenHeight * 0.2,
    marginVertical: marginx,
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
    height: screenHeight * 0.45,
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
  inputPass: {
    position: "relative",
    justifyContent: "center",
  },
  iconEye: {
    position: "absolute",
    right: 0,
    top: 20,
  },
  date: {
    height: 50,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  textDate: {
    fontSize: 20,
    marginTop: 10,
  },
  picker: {
    height: 50,
    borderBottomWidth: 1,
    // marginBottom: 15,
    // marginBottom: 20,
  },
  pickerItem: {
    fontSize: 20,
  },
  footer: {
    width: "80%",
    height: screenHeight * 0.25,
    justifyContent: "center",
  },
  button: {
    // marginVertical: 25,
    backgroundColor: "#00A400",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
});
