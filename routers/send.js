
var bodyParser = require('body-parser');

var apiWhiteSharesPool=require('../server/api/whiteSharesPool.js');

module.exports = function(app) {
	
	
	app.use(bodyParser.json()); 
	app.use(bodyParser.urlencoded({extended: true})); 
	
	// 接口请求
	app.post('/ApiTest',function(req,res){
		apiWhiteSharesPool.ApiTest(req,res);
	}) 

}

