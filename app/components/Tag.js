
import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "./../styles/Colors";

class Tag extends Component {
  static defaultProps = {
    onTagPress: () => {},
    selectedTags: []
  }

  render() {
    return (
      <View style={[styles.tagContainer, this.props.style]}>
        {this.props.tagData.map((item, index) => {
          let selectIndex = this.props.selectedTags.indexOf(item);
          return(
            <TouchableOpacity
              key={index}
              style={[
                styles.tagStyle,
                selectIndex >= 0 ? styles.selectedStyle : {}
              ]}
              onPress={() => this.props.onTagPress(item)}
            >
              <Text
                style={[
                  styles.tagText,
                  selectIndex >= 0 ? styles.selectedText : {}
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
  flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  tagText: {
    color: Colors.defaultFont,
    fontSize: 14,
    fontFamily: "Avenir"
  },
  tagStyle: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 12,
    marginBottom: 12,
  },
  selectedStyle: {
    backgroundColor: "white"
  },
  selectedText: {
    color: Colors.selectedFont
  }
});


export { Tag };
