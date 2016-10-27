// used to get and post data from client to server and vice  versa
// We use this class to store and retrieve data via the async store
import asynchelper from '../core/asynchelper'

class requesthandler {

  static getHeaders(){
  	 var headersToSend = new Headers();
  	return headersToSend;
  }

  static post(options){
	return fetch(options.url, {
	    method: 'POST',
	    headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(options.data)
	  });
  }

  static get(additionalHeaders, url) {
  	 var headersToSend = getHeaders();
  	 for (var i = additionalHeaders.length - 1; i >= 0; i--) {
  	 	headersToSend.append(additionalHeaders[i].key, additionalHeaders[i].value);
  	 }

	var options = {
 		headers: headersToSend,
 		method: 'GET'
	};

  	return fetch(url, options)
  	.then((response) => response.json());
  }

}

module.exports = requesthandler;