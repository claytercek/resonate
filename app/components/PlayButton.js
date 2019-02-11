import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Spotify from "rn-spotify-sdk";

class PlayButton extends Component {
  /**
   *
   * @param {required} props
   * Use the class constructor to set the initial state
   * for your component.
   */
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      toggleIcon: "ios-play"
    };
  }

  /**
   * Handle the play/pause button press event.
   */
  onPress() {
    /**
     * If you name your variables the same name as your state
     * properties, you can simplify your setState call.
     */
    const toggle = !this.state.toggle;
    const toggleIcon = toggle ? "ios-pause" : "ios-play";
    this.setState({ toggle, toggleIcon });
    Spotify.playURI("spotify:track:2zk7TQx9Xa4yxYmsjgDCPp", 0, 0);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.playButton}
          /**
           * ✨ You have to bind the context in order for the
           * method to have access to the state object.
           */
          onPress={this.onPress.bind(this)}
        >
          <Icon
            style={[
                /**
                 * toggle between {pause_styleSheet} : {play_styleSheet}
                 */
              this.state.toggle
                ? { marginTop: 5 }
                : { marginLeft: 5, marginTop: 5 }
            ]}
            name={this.state.toggleIcon}
            size={50}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    backgroundColor: "#E7E7E7",
    borderRadius: 90
  },
  iconStyle: {}
});

export { PlayButton };
