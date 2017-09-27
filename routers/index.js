// 注册模块
const exp = require('express');
const route = exp.Router();
const fs = require('fs');
// 注册接口
route.get('/', function (req, res) {
	// 左侧边栏分类列表
	var catedata = fs.readFileSync('./data/catedata.json');
	var catedataArr = [];
	if (catedata) {
		catedataArr = JSON.parse(catedata);
	}

	// 京东秒杀
	var jdms = fs.readFileSync('./data/J_f/jdms.json');
	var jdmsObj = {};
	if (jdms) {
		jdmsObj = JSON.parse(jdms);
	}

	// 发现好货
	var find = fs.readFileSync('./data/J_f/find.json');
	var findArr = [];
	if (find) {
		findArr = JSON.parse(find);
	}

	// 会买专辑
	var sup = fs.readFileSync('./data/J_f/sup.json');
	var supArr = [];
	if (sup) {
		supArr = JSON.parse(sup);
	}
	// 排行榜
	var top = fs.readFileSync('./data/J_f/top.json');
	var topArr = [];
	if (top) {
		topArr = JSON.parse(top);
	}
	// 领券中心
	var quan = fs.readFileSync('./data/J_f/quan.json');
	var quanArr = [];
	if (quan) {
		quanArr = JSON.parse(quan);
	}
	// 觅me
	var fineME = fs.readFileSync('./data/J_f/fineME.json');
	var fineMEArr = [];
	if (fineME) {
		fineMEArr = JSON.parse(fineME);
	}
	// 享品质
	var entry = fs.readFileSync('./data/entry.json');
	var entryArr = [];
	if (entry) {
		entryArr = JSON.parse(entry);
	}
	// 爱生活
	var girdItem = fs.readFileSync('./data/girdItem+.json');
	var girdItemArr = [];
	if (girdItem) {
		girdItemArr = JSON.parse(girdItem);
	}
	// 还没逛够
	var moregoods = fs.readFileSync('./data/moregoods.json');
	var moregoodsArr = [];
	if (moregoods) {
		moregoodsArr = JSON.parse(moregoods);
	}
	// 帮助
	var help = fs.readFileSync('./data/help.json');
	var helpArr = [];
	if (help) {
		helpArr = JSON.parse(help);
	}
	// copyright
	var copyright = fs.readFileSync('./data/copyright.json');
	var copyrightArr = [];
	if (copyright) {
		copyrightArr = JSON.parse(copyright);
	}
	// place
	var place = fs.readFileSync('./data/place.json');
	var placeArr = [];
	if (place) {
		placeArr = JSON.parse(place);
	}
	// wj网址导航
	var wj = fs.readFileSync('./data/wj.json');
	var wjArr = [];
	if (wj) {
		wjArr = JSON.parse(wj);
	}

	// 渲染页面
	res.render('index', {
		catedata: catedataArr,
		jdms: jdmsObj,
		find: findArr,
		sup: supArr,
		top: topArr,
		quan: quanArr,
		fineME: fineMEArr,
		entry: entryArr,
		girdItem: girdItemArr,
		moregoods: moregoodsArr,
		help: helpArr,
		copyright: copyrightArr,
		place: placeArr,
		wj: wjArr,
	})
})

// 导出模块
module.exports = route;