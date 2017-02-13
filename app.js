
var express = require('express'),
    ejs = require('ejs'),
    logger = require('./server/logs'),
    renderRouters=require('./routers/render'),
    sendRouters=require('./routers/send'),
    port=process.env.PORT||6006;

var app=express();


//设置模板目录
app.set('views',__dirname +'/views');    

app.engine('ejs',ejs.__express);

app.set('view engine', 'ejs');

 
//设置静态
app.use(express.static(__dirname+'/assets'))
app.use(express.static(__dirname+'/upload'))
 
// 监听端口
app.listen(port, function (err){
    if (err) {
       throw err;
    }
    console.log('Listening at http://localhost:' + port + '\n')
})

// 路由配置
renderRouters(app)
sendRouters(app)
