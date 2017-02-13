'use strict';
/*******************
module 
*******************/
var request = require('request');
var toys = require( '../module/requestAction' );

function ApiTest(req,res){
	var options = toys.actionRequest(req,'/as/stockpool/getversion.json');
    request(options,function(error,response,body){
        if(!error){
           res.send(body)
        }else{
           res.send({ code: -1, data: null, msg: 'create action fail'}); 
        }
    })
}

module.exports = {
	ApiTest: ApiTest
}

