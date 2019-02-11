
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Playlist from "./app/views/Playlist";
import Player from "./app/views/Player";
import { Colors } from "./app/styles/Colors";
import Spotify from "rn-spotify-sdk";

/**
 * Some random pages for tab navigation demo
 */
class Home extends Component {
  componentDidMount() {
    if(!Spotify.isInitialized()) {
			// initialize spotify
			var spotifyOptions = {
				"clientID":"dcd8765def1247768928a9a0887e625e",
				"sessionUserDefaultsKey":"SpotifySession",
				"redirectURL":"resonate://auth",
				"scopes":["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
			};
			Spotify.initialize(spotifyOptions).then((loggedIn) => {
				// update UI state
				this.setState({spotifyInitialized: true});
				// handle initialization
				if(!loggedIn)
				{
					Spotify.login()
				}
			}).catch((error) => {
				Alert.alert("Error", error.message);
			});
		}
  }

  render() {
    return (
        <View>
          {/* <RepoList /> */}
        </View>
    );
  }
}

class First extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 50, marginTop: 300, textAlign: "center" }}>
          {" "}
          FIRST PAGE{" "}
        </Text>
      </View>
    );
  }
}

/**
 * Tab Navigation Config.
 */

const BottomNav = createBottomTabNavigator(
  {
    Home: { screen: Home },
    First: { screen: First },
    Playlist: { screen: Playlist },
    Player: { screen: Player }
  },
  {
    tabBarOptions: {
      activeTintColor: "#F8F8F8",
      inactiveTintColor: Colors.tabIconInactive,
      style: {
        backgroundColor: Colors.tabNav
      }
    }
  }
);

const App = createAppContainer(BottomNav);
export default App;


const styles = StyleSheet.create({});
