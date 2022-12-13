import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import defaultavt from "../../assets/defaultavt.png"

export default function Messenger() {
        const messengers= [
            {id: 1, fullname: "Trinh Dat", name: "Dat", avatar:"https://reactnative.dev/img/tiny_logo.png" , mes: "OK!!!!", send: 1},
            {id: 2, fullname: "Pham Dinh Minh", name: "Minh", avatar:"https://gamek.mediacdn.vn/2019/10/20/photo-1-1571521922264714072244.jpg", mes: "I love You<3", send: 0 },
            {id: 4, fullname: "Do Dang Phuong", name: "Phuong", avatar:"https://i.ytimg.com/vi/dkvaprtP6L8/maxresdefault.jpg" , mes: "Good luck!!", send: 0 },
            {id: 5, fullname: "Ho Duc Han", name: "Han", avatar:"https://cdna.artstation.com/p/assets/images/images/019/387/690/large/inward-vertical-city.jpg?1563272711"  , mes: "Come on!!", send: 1},
            {id: 6, fullname: "Chien Hoang Van", name: "Hoang", avatar:"https://www.ebtc.ie/wp-content/uploads/2017/10/bigstock-Autumn-Fall-scene-Beautiful-150998720.jpg", mes: "NO!!!!", send: 1  },
            {id: 3, fullname: "Vu Ba Luong", name: "Luong", avatar:"https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687", mes: "See you again!!!!", send: 1  },
    
        ];
        const list1 = () => {
            return messengers.map((element) => {
              return (
                <View style={styles.friend} key={element.id}>
                    <TouchableOpacity >
                        <Image style= {styles.avt} source={{ uri: element.avatar, }}></Image>
                    </TouchableOpacity>
                    <Text style= {styles.nameFr}>{element.name}</Text>
                </View>
              );
            });
          };
        const send = (send, mes) => {
            if(send)
            return "You: " + mes;
            else
            return mes;
          }
        const list2 = () => {
            return messengers.map((element) => {
              return (
                <TouchableOpacity style={styles.friendMess} key={element.id}>
                    <Image style= {styles.avt} source={{ uri: element.avatar, }}></Image>
                    <View style={styles.user}>
                        <Text style= {styles.name}>{element.fullname}</Text>
                        <Text style= {styles.mes}>{send(element.send, element.mes)}</Text>
                    </View>
                </TouchableOpacity>
              );
            });
          };
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Tin Nhắn</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.listFr}>
        {list1()}
        </ScrollView>
        <ScrollView showsHorizontalScrollIndicator={false}>
        {list2()}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 35,
        marginLeft: 50,
        fontSize: 28,
        fontWeight: "700",
    },
    listFr: {
        flexDirection: "row",
        marginTop: 10,
    },
    friend: {
        marginLeft: 20,
    },
    avtfr: {
        width :60,
        height:60,
        borderRadius: 100,
    },
    nameFr: {
        textAlign: "center",
        marginLeft: 10,
    },
    friendMess: {
        marginTop: 20,
        flexDirection: "row",
        width: "100%",
    },
    avt :{
        marginLeft: 10,
        width :60,
        height:60,
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
        fontSize: 15,
        opacity: 0.5,
    }
});
