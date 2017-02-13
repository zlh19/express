
var CONFIG = {

	title: '有股吗',
	module: {
		'/groupLogin': {
			path: '/issue/groupLogin/groupLogin',
			page: 'page0',
			title: '小白股票池'
		},
		'/whiteSharesPool': {
			path: '/whiteSharesPool/whiteSharesPool/whiteSharesPool',
			page: 'page0',
			title: '小白股票池'
		},
		'/404': {
			path: '/error/404/404',
			page: 'page0',
			title: '工厂登录'
		}
	},
	basePath: '',
	min: ''

};


module.exports = function( configPath ){

	var page = CONFIG.module[configPath].page,
		title = CONFIG.module[configPath].title,
		headTitle=title + '-' + CONFIG.title,
		path = CONFIG.module[configPath].path;
	return {
		headTitle: headTitle,
		title:title,
		page: page,
		path: path
	}
};
