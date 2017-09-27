var send = (res, code, msg, data) => {
	res.status(200).json({ code, msg, data });
}

function isLogin(req, res, next) {
	if (req.cookies.userName) {
		next();
	} else {
		if (req.xhr) {
			send(res, "system error", "系统错误，请重试！");
		} else {
			res.redirect('/user/login.html');
		}
	}
}

module.exports = { send, isSign };