'use strict';

var logger	= require( '../logs' );
var qs = require( 'querystring' );
var serverConfig = require( '../../config/server' );

// function actionRequest(config,path,configSend){
// 	var method = config.method.toUpperCase(),
// 		data = ( method == 'GET' ) ? config.query : config.body,
// 		// path = path + ( method == 'GET' ? '?' + qs.stringify(data) : '' );
// 		path = path;

// 	var options={
// 		url:serverConfig.hostname + path,
// 		method:method,
// 		json:true,
// 		body:data
// 		// form:JSON.stringify(data),
// 	}
// 	logger.log('info',options)
	
// 	return options
// }

let actionRequest=(config,paths,configSend)=>{
	let method = config.method.toUpperCase(),
		data = ( method == 'GET' ) ? config.query : config.body,
		// path = path + ( method == 'GET' ? '?' + qs.stringify(data) : '' );
		path = paths;

	let options={
		url:serverConfig.hostname + path,
		method:method,
		json:true,
		body:data
		// form:JSON.stringify(data),
	}
	logger.log('info',options)
	
	return options
}
module.exports={
	actionRequest:actionRequest
}
