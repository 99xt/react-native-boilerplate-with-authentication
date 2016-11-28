import React from 'react';

import {
  View,
  Text,
  AsyncStorage,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import asynchelper from '../core/asynchelper'
import requesthandler from '../core/requesthandler'
import Testcomponent from '../components/shared/testcomponent';

module.exports = React.createClass({

	  getInitialState: function(){
    	return {
      		test: ''
    	};
  	},

	componentDidMount: function() {
      asynchelper.getDataFromStore('cookie').then((result) =>{
        this.state.test = result;
        console.log(this.state.test);
      });
    },	

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>Landing Page !!!</Text>
         <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={this.sendCookie}>
            <Text style={styles.label}>SEND</Text>
         </TouchableHighlight>
         <Testcomponent message="this is a message from a prop" />
      </View>
    );
  },

  sendCookie: function(){
	requesthandler.get({ "cookie": this.state.test }, 'https://jsonplaceholder.typicode.com/posts')
  	.then((responseData) => {
    	console.log(responseData);
    });
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
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
  }
});


