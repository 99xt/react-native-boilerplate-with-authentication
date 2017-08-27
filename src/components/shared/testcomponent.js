import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class Testcomponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.attitude}>
          { this.props.message }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  attitude: {
    fontStyle: 'italic',
    fontFamily: 'georgia',
    fontSize: 26
  }
});
