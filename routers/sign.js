// 登录模块
const exp = require('express');
const fs = require('fs');
const sign = exp.Router();

sign.post('/api/v1/user/signin', (req, res) => {
    console.log(req.body);
    var filename = `users/${req.body.petname}.txt`;
    fs.exists(filename,(exists)=>{
        if (exists) {
            // 文件存在,说明用户名正确
            var user = JSON.parse(fs.readFileSync(filename).toString());
            if (req.body.password == user.password) {
                // 密码相同
                // 设置cookie
                res.cookie('petname',req.body.petname);
                res.status(200).json({code:"success",message:"登录成功"});
            }else{
                // 密码不同
                res.status(200).json({code:"password error",message:"密码错误"});
            }
        }else{
            // 文件不存在,用户还未注册
            res.status(200).json({code:"file error",message:"用户未注册，请先去注册"});
        }
    })
})
// 登出接口
sign.get('/api/v1/user/signout',(req,res)=>{
    // 清除cookie
    res.clearCookie('petname');
    res.status(200).json({code:"success"});
})

module.exports = sign;