// We use this class to store and retrieve data via the async store
import {
  AsyncStorage
} from 'react-native';

class asynchelper {

  static setDataToStore(key, value){
	  AsyncStorage.setItem(key, value);
  }

  static getDataFromStore(key) {
  	return AsyncStorage.getItem(key);
  }

  static clearDataFromStore(key){
  	AsyncStorage.removeItem(key);
  }

}

module.exports = asynchelper;