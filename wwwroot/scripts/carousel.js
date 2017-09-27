var i = 0;
var timer2 = setInterval(function () {
	changeIndex('.hm_items')
}, 1000);

function changeIndex(ele) {
	i = i >= $(ele).length - 1 ? 0 : i + 1;
	changeImage(ele);
}

function changeImage(ele) {
	$(ele).eq(i).fadeIn('fast').siblings(ele).fadeOut('fast');
	$(ele).parent().find('.indicates span ').eq(i).addClass('active').siblings().removeClass('active');
}

// 上一张
$('.hm #prev').click(function () {
	i = i <= 0 ? $('.hm_items').length - 1 : i - 1;
	changeImage('.hm_items');
})

// 下一张
$('.hm #next').click(function () {
	changeIndex('.hm_items');
})

$('.hm').mouseenter(function () {
	$('.hm>span').fadeIn();
})
$('.hm').mouseleave(function () {
	$('.hm>span').fadeOut();
})
// 指示器
// $('.indicators span').hover(function () {
// 	clearInterval(timer2);
// 	i = $(this).index();
// 	changeImage();
// }, function () {
// 	timer2 = setInterval(changeIndex, 1000);
// })
$('.hm').hover(function () {
	clearInterval(timer2);
}, function () {
	timer2 = setInterval(function () {
		changeIndex('.hm_items')
	}, 1000);

})


$('.ms_box').each(function (index, item) {
	$(this).css({
		left: index * 1000
	})
})

// 表示起始图片和当前轮播到的图片索引
var index = 0;
// 上一张轮播图片的索引
var lastIndex = 0;

// 点击上一张时，获取将要显示图片的索引
function getPrevIndex(ele) {
	console.log($(ele).length);
	return index <= 0 ? $(ele).length - 1 : index - 1;
}
// 点击下一张时，获取将要显示图片的索引
function getNextIndex(ele) {
	console.log($(ele).length);
	return index >= $(ele).length - 1 ? 0 : index + 1;
}

// 显示下一张图片
function showNextImage(ele, width) {
	// 获取当前需要显示图片的索引
	index = getNextIndex(ele);

	$(ele).eq(index).finish().css({
		left: width
	}).animate({
		left: 0
	}, 500)

	$(ele).eq(lastIndex).finish().animate({
		left: -width
	}, 500)

	// $('.indicators span').eq(lastIndex).removeClass('current');
	// $('.indicators span').eq(index).addClass('current');
	lastIndex = index;
}

// 显示上一张图片
function showPrevImage(ele, width) {
	index = getPrevIndex(ele);
	$(ele).eq(index).finish().css({
		left: -width
	}).animate({
		left: 0
	}, 500);

	$(ele).eq(lastIndex).finish().animate({
		left: width
	}, 500)

	// $('.indicators span').eq(lastIndex).removeClass('current');
	// $('.indicators span').eq(index).addClass('current');
	lastIndex = index;
}

$('.ms_box_wrap  #next').click(function () {
	showNextImage('.ms_box', 1000);
})

$('.ms_box_wrap #prev').click(function () {
	showPrevImage('.ms_box', 1000);
})

// 自动播放
var timer = setInterval(function () {
	showNextImage('.ms_box', 1000);
}, 2000);

$('.ms_item').hover(function () {
	clearInterval(timer);
}, function () {
	timer = setInterval(function () {
		showNextImage('.ms_box', 1000);
	}, 2000);
})
$('.ms_box_wrap>span').hover(function () {
	clearInterval(timer);
}, function () {
	timer = setInterval(function () {
		showNextImage('.ms_box', 1000);
	}, 2000);
})


$('.ms_box_wrap').mouseenter(function () {
	$('.ms_box_wrap>span').fadeIn();
})
$('.ms_box_wrap').mouseleave(function () {
	$('.ms_box_wrap>span').fadeOut();
})


var mySwiper = new Swiper(".swiper-containe", {
	direction: "horizontal",/*横向滑动*/
	loop: true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
	pagination: ".swiper-pagination",/*分页器*/
	prevButton: ".swiper-button-prev",/*前进按钮*/
	nextButton: ".swiper-button-next",/*后退按钮*/
	autoplay: 1000/*每隔3秒自动播放*/,
	effect: 'fade',
	paginationClickable: true,
})
var mySwiper2 = new Swiper(".content", {
	direction: "horizontal",/*横向滑动*/
	loop: true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
	pagination: ".swiper-pagination",/*分页器*/
	prevButton: ".swiper-button-prev2",/*前进按钮*/
	nextButton: ".swiper-button-next2",/*后退按钮*/
	autoplay: 3000/*每隔3秒自动播放*/,
	effect: 'fade',
	paginationClickable: true,
})
var mySwiper2 = new Swiper("#J_live", {
	direction: "horizontal",/*横向滑动*/
	loop: true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
	pagination: ".swiper-pagination",/*分页器*/
	prevButton: ".swiper-button-prev",/*前进按钮*/
	nextButton: ".swiper-button-next",/*后退按钮*/
	autoplay: 3000/*每隔3秒自动播放*/,
	effect: 'fade',
	paginationClickable: true,
})
var mySwiper3 = new Swiper(".pt_ft", {
	direction: "horizontal",/*横向滑动*/
	loop: true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
	pagination: ".swiper-pagination",/*分页器*/
	prevButton: ".swiper-button-prev",/*前进按钮*/
	nextButton: ".swiper-button-next",/*后退按钮*/
	// autoplay: 3000/*每隔3秒自动播放*/,
	speed:3000,
	// effect: 'fade',
	paginationClickable: true,
})


var mySwiper4 = new Swiper(".carousel", {
	direction: "horizontal",/*横向滑动*/
	loop: true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
	pagination: ".swiper-pagination",/*分页器*/
	// prevButton: ".swiper-button-prev",/*前进按钮*/
	// nextButton: ".swiper-button-next",/*后退按钮*/
	autoplay: 2000/*每隔3秒自动播放*/,
	// speed:3000,
	// effect: 'fade',
	paginationClickable: true,
})


