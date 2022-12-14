import { Text, View, StyleSheet, Image, Avatar, ScrollView } from "react-native";
import React from "react";
import Layout from '../../components/Layout';
export default function Notification() {
    const [notify, setNotify] = React.useState([
        { id: 1, name: 'Vũ Bá Lượng', content: 'đã thích ảnh của bạn', time: '7:00 am' },
        { id: 2, name: "Messi", content: 'đã bình luận về ảnh của bạn', time: '8:00 am' },
        { id: 4, name: "Ronaldo", content: "đã cập nhật ảnh đại diện của anh ấy", time: '9:00 am' },
        { id: 5, name: "M3P", content: "đã cập nhật ảnh đại diện của anh ấy", time: '10:00 am' },
        { id: 6, name: "Pokemon RocKet", content: "đã cập nhật ảnh đại diện của anh ấy", time: '11:00 am' },
        { id: 7, name: "Ronaldo", content: "đã cập nhật ảnh đại diện của anh ấy", time: '12:00 am' },
        { id: 8, name: "Ronaldo", content: "đã cập nhật ảnh đại diện của anh ấy", time: '1:00 pm' },
    ])
    return (
        // <Layout>
            <View>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Thông báo</Text>
                </View>
                <ScrollView>
                    {
                        notify.map(item => (
                            <View key={item.id} style={styles.main}>
                                <Image style={styles.img} source={require('../../assets/icon.png')} />
                                {/* <Avatar style={styles.img} rounded source={{uri: ''}}/> */}
                                <View style={styles.content}>
                                    <Text style={styles.item}><Text style={styles.name}>{item.name}</Text> {item.content}</Text>
                                    <Text>{item.time}</Text>
                                </View>  
                            </View>
                        ))}
                </ScrollView>
            </View>
        // </Layout>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    textHeader: {
        fontSize: 25,
        fontWeight: "600",
        marginLeft:30,
    },
    main: {
        marginBottom: 10,
        flexDirection: "row",
    },
    img :{
        marginLeft: 10,
        marginRight: 10,
        width :60,
        height:60,
        borderRadius: 100,
        flex: 0,
    },
    content : {
        flex: 1,
    },
    name: {
        fontWeight: "bold",
    }
})