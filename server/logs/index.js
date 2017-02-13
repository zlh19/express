/*
* log对象的的属性
* type: ['info','abnormal','error'] //表示日志类型，info一般输出到信息日志，abnormal一般输入到异常日志，error一般输出到错误日志
* msg: String
* */

var log4js = require('log4js');
var logsConfig = require('./config.json');
var path=require('path')

var logInfo;

var Logappenders=logsConfig.appenders;
for(var i in Logappenders){
    Logappenders[i].filename=path.join('/','logs/log')
}


log4js.configure(logsConfig);


logInfo = log4js.getLogger('log_info');

function _log(type,logObj) {
    var logStr;
    logStr = JSON.stringify(logObj);
    switch (type){
        case 'info':
            logInfo.info(logStr);
            console.log(logObj);
            break;
        case 'error':
            logInfo.error(logStr);
            throw new Error(logStr);
            break;
        case 'warn':
            logInfo.warn(logStr);
            break;
        case 'fatal'://致命的，严重的
            logInfo.fatal(logStr);
            break;
        default:
            logInfo.debug(logStr);
            break;
    }

}

module.exports={
    log:_log
}