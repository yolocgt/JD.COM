const exp = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	fs = require('fs');
app = exp();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// 设置模板引擎，并规定默认渲染html也页面
app.engine('html', require('express-art-template'));
app.set('view engine', 'html');
// app.set('views', 'wwwroot');

// 首页加载数据接口
app.use(require('./routers/index'));
// 注册接口
app.use(require('./routers/register'));
// 登录接口
app.use(require('./routers/sign'));
app.use(exp.static('wwwroot'));

app.listen(8080, () => {
	console.log('Server on port 8080......');
})