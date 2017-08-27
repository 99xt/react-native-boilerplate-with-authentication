import React from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';

import Login from './components/login'
import Landing from './components/landing'

var ROUTES = {
  login: Login,
  landing: Landing
};

export default class Main {
  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>;
  }

  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ {name: 'login'} }
        renderScene={this.renderScene}
        configureScene={ () => {
          return Navigator.SceneConfigs.FloatFromRight;
        } }
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
