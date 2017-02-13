
import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import asynchelper from '../core/asynchelper'
import requesthandler from '../core/requesthandler'

module.exports = React.createClass({

  getInitialState: function(){
    return {
      username: '',
      password: '',
      simulateLogin: true
    };
  },

  render: function() {
    return (
       <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'Enter Username'}
            maxLength={12}
            multiline={false}
            />
            <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            secureTextEntry={true}
            placeholder={'Enter Password'}
            maxLength={12}
            multiline={false}
            />
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={this.onPress}
            >
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },

  onPress: function() {
    if(!this.state.simulateLogin){
      requesthandler.post({ url: 'http://login-url', data: { Username: this.state.username, Password: this.state.password } })
  .then((responseData) => {
    asynchelper.setDataToStore('cookie', JSON.stringify(responseData.headers.map["set-cookie"]));
    console.log("success");
    this.props.navigator.push({ name: 'landing' });
    });
    }
    else {
       this.props.navigator.push({ name: 'landing' });
    }
  
  }

});
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  },
   loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    color: '#555555',
    padding: 10,
    height: 50,
    borderColor: '#32C5E6',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#32c5e6'
  },
  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff'
  }

});