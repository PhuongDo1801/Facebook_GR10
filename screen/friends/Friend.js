import React from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import FriendItem from '../../components/FriendItem';

export default function Friend() {

    const messengers= [

        {id: 1, fullname: "Trinh Dat", name: "Dat", avatar:"https://reactnative.dev/img/tiny_logo.png" , mutual: 1},

        {id: 2, fullname: "Pham Dinh Minh", name: "Minh", avatar:"https://gamek.mediacdn.vn/2019/10/20/photo-1-1571521922264714072244.jpg", mutual: 1 },

        {id: 4, fullname: "Do Dang Phuong", name: "Phuong", avatar:"https://i.ytimg.com/vi/dkvaprtP6L8/maxresdefault.jpg" , mutual: 3 },

        {id: 5, fullname: "Ho Duc Han", name: "Han", avatar:"https://cdna.artstation.com/p/assets/images/images/019/387/690/large/inward-vertical-city.jpg?1563272711"  , mutual: 20},

        {id: 6, fullname: "Chien Hoang Van", name: "Hoang", avatar:"https://www.ebtc.ie/wp-content/uploads/2017/10/bigstock-Autumn-Fall-scene-Beautiful-150998720.jpg", mutual: 6  },

        {id: 3, fullname: "Vu Ba Luong", name: "Luong", avatar:"https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687", mutual: 2  },
    ];
    const list1 = () => {
        return messengers.map((element) => {
            return (
                <View style={styles.friend} key={element.id}>
                    <View>
                        <FriendItem urlAvatar={element.avatar} mutual={element.mutual} name={element.fullname}></FriendItem>
                    </View>
                    
                </View>

            );
        });
    };
    return (
        <SafeAreaView style={styles.container}> 
            <View style={styles.header}>
                <Text style={styles.textHeader}>Bạn bè</Text>
            </View>
            <View style={styles.invite}>
                <Text style={styles.textInvite}>Lời mời kết bạn</Text>
            </View>
            <View style={styles.lstFriend}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {list1()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },

    header: {
        justifyContent: "flex-end",
        paddingTop: "20%",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },

    textHeader: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: "2%",
    },

    invite: {
        paddingTop: "2%",
    },

    textInvite: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "2%",
    },

    lstFriend: {
        paddingTop: 10
    }
})