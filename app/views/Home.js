import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity, Modal, Dimensions, Animated } from "react-native";
import { MoodPicker } from "../components/MoodPicker.js";
import { Map } from "../components/Map";
import { PlaylistCard } from "../components/PlaylistCard";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			topY: new Animated.Value(60),
			modalVisible: false
		};
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	onPress = () => {
		console.log(this.state.topY);
		if (this.state.isOpen) {
			Animated.spring(this.state.topY, {
				toValue: 60,
				friction: 6
			}).start();
		} else {
			Animated.spring(this.state.topY, {
				toValue: 500,
				friction: 6
			}).start();
		}
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		const paddingStyle = {
			paddingTop: this.state.topY
		};

		return (
			<Animated.View style={[styles.container, paddingStyle]}>
				{/*********************************** MAP *********************************************/}
				<View style={styles.map}>
					<Map />
					<View style={{ flex: 1, flexDirection: "row", justifyContent: "center", marginTop: 65, position: "absolute" }}>
						<Text style={{ color: "white", marginLeft: 10, fontSize: 28, fontWeight: "bold", paddingRight: 120 }}>Philadelphia</Text>

						<TouchableOpacity
							onPress={() => {
								this.setModalVisible(true);
							}}>
							<Image source={require("../assets/moodPicker.png")} style={{}} />
						</TouchableOpacity>
					</View>
				</View>

				{/*********************************** DOWN ARROW *********************************************/}
				<View style={{ width: "100%", height: 60, backgroundColor: "#312F2F", marginTop: 60, borderTopLeftRadius: 14, borderTopRightRadius: 14, alignItems: "center" }}>
					<TouchableOpacity onPress={this.onPress}>
						<Image style={{ marginTop: 15 }} source={require("../assets/down-arrow.png")} />
					</TouchableOpacity>
				</View>

				{/*********************************** SCROLLVIEW 1 *********************************************/}
				<ScrollView style={styles.mainWrapper}>
					<View contentContainerstyle={styles.titleWrapper}>
						<Text style={{ color: "white", marginLeft: 30, fontSize: 20 }}>Top Charts</Text>
					</View>

					<ScrollView style={styles.playlistRow} horizontal={true}>
						<PlaylistCard />
						<PlaylistCard />
						<PlaylistCard />
					</ScrollView>

					{/*********************************** SCROLLVIEW 2 *********************************************/}

					<View contentContainerstyle={styles.titleWrapper}>
						<Text style={{ color: "white", marginLeft: 30, fontSize: 20 }}>Recommended</Text>
					</View>

					<ScrollView style={styles.playlistRow} horizontal={true}>
						<PlaylistCard />
						<PlaylistCard />
						<PlaylistCard />
					</ScrollView>
				</ScrollView>

				<Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
					<MoodPicker
						closeMp={() => {
							this.setModalVisible(false);
						}}
					/>
				</Modal>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 60,
		flexDirection: "column",
		position: "relative",

		// alignItems: 'center',
		justifyContent: "flex-start"
	},
	map: {
		position: "absolute",
		zIndex: -100,
		width: "100%",
		height: 600
	},
	mainWrapper: {
		flex: 1,
		// marginTop: 50,
		zIndex: 100,
		backgroundColor: "#312F2F"
	},
	playlistRow: {
		flex: 1,
		flexDirection: "row",
		height: 400,
		paddingTop: 20,
		paddingLeft: 30
	},
	cardWrapper: {
		flex: 1,
		flexDirection: "column"
	},
	moodPicker: {
		backgroundColor: "#312F2F",
		height: 1000,
		opacity: 0.95,
		flex: 1,
		flexDirection: "column",
		alignItems: "flex-start"
	}
});

export default Home;
