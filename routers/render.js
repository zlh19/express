var ConfigFun = require('./site');

module.exports = function(app) {

    // 首页
    app.get('/', function(req, res) {
        res.redirect('/whiteSharesPool');
    })
	

    // 小白股票池
    app.get('/whiteSharesPool', function(req, res) {
        res.render('whiteSharesPool/whiteSharesPool',ConfigFun('/whiteSharesPool'))
    })
    

	// 404
    app.get('*', function(req, res) {
        res.render('error/404',ConfigFun('/404'))
    })
    


}
