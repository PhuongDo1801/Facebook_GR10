import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, TextInput, View, Text, Image, Pressable, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({ title, avatar, onPress }) => (
	<Pressable onPress={onPress}>
		<View style={styles.item}>
			<Image style={styles.avatar} source={{ uri: avatar }} />
			<Text style={styles.title}>{title}</Text>
		</View>
	</Pressable>
);

export default function Search({ navigation }) {
	const [filterData, setFilterData] = useState([]);

	const [masterData, setMasterData] = useState([]);
	const [search, setsearch] = useState('');
	const [friends, setfriends] = useState([]);
	const [messages, setmessages] = useState([]);
	const [people, setpeople] = useState([]);

	const [searchType, setSearchType] = useState(1);

	/*
		1. Friend
		2. Post
		3. Message
	*/

	useEffect(() => {
		if (search) fetchPosts();
	}, [search]);

	const fetchPosts = async () => {
		const token = await AsyncStorage.getItem('id_token');
		return fetch(`https://severfacebook.up.railway.app/api/v1/search/${search}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'bearer ' + token,
			},
			body: JSON.stringify(),
		})
			.then((response) => {
				const statusCode = response.status;
				if (statusCode === 200) {
					return (response = response.json());
				} else {
					alert('Dữ liệu thất bại');
				}
			})
			.then((responseJson) => {
				if (responseJson !== undefined) {
					console.log(111111, 'friends', responseJson.data.friends);
					console.log(111111, 'messages', responseJson.data.messages);
					console.log(111111, 'people', responseJson.data.people);
					setfriends(responseJson.data.friends);
					setmessages(responseJson.data.messages);
					setpeople(responseJson.data.people);
					// setMasterData(responseJson)
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const searchFilter = (text) => {
		// if (text) {
		//   console.log(2222, 'masterData', masterData );

		//   const newData = masterData.filter((item) => {
		//     const itemData = item.username ? item.title.toUpperCase() : ''.toUpperCase()
		//     const textData = text.toUpperCase()
		//     return itemData.indexOf(textData) > -1
		//   })
		//   setFilterData(newData)
		//   setsearch(text)
		// } else {
		//   setFilterData(masterData)
		//   setsearch(text)
		// }
		setsearch(text);
	};

	return (
		// <SafeAreaView style={{ flex: 1 }}>
		<View style={styles.container}>
			<View>
				{/* <Button title="Learn More" color="#841584" /> */}
				<TextInput
					style={styles.textInputStyle}
					value={search}
					placeholder="search"
					underlineColorAndroid="transparent"
					onChangeText={(text) => searchFilter(text)}
				/>
			</View>
			<FlatList
				data={people}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => {
					console.log('nam', item);
					console.log('avatar:', item.avatar);

					return (
						<View>
							<Item
								avatar={item.avatar}
								title={item.username}
								onPress={() => {
									console.log('Navigate');
									navigation.navigate('Information', {
										userData: item,
									});
								}}
							/>
						</View>
					);
				}}
			/>
		</View>
		// </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		marginTop: 48,
	},
	itemStyle: {
		padding: 15,
	},
	textInputStyle: {
		height: 50,
		borderWidth: 1,
		paddingLeft: 20,
		margin: 5,
		borderColor: '#009688',
		backgroundColor: 'white',
		borderRadius: 40,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		height: 32,
		width: 32,
		borderRadius: 20,
	},
	title: {
		fontSize: 32,
	},
});
