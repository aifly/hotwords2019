﻿window.imgs = {
  logo: "./assets/images/logo.png",
  point: "./assets/images/point.png",
  arrow: "./assets/images/arrow.png",
  play1:'./assets/images/play1.png',
  play:'./assets/images/play.png',
  index:'./assets/images/index.png',
  entry:'./assets/images/entry.png',
  title:'./assets/images/title.png',
  remark:'./assets/images/remark.png',
  door:'./assets/images/door.png',
  person:'./assets/images/person.png',
  arr:'./assets/images/arr.png',
  xinxingchengzhenhua:'./assets/images/xinxingchengzhenhua.png',
  say:'./assets/images/say.png',
  back:'./assets/images/back.png',
  photo:'./assets/images/photo.png',
  black:'./assets/images/black.png',
  user1:'./assets/images/user1.png',
  user2:'./assets/images/user2.png',
  discussBtn:"./assets/images/discuss-btn.png"

};


 
 
var arr = [];
 
 
for (var attr in imgs) {
	arr.push(imgs[attr]);
}

 window.config = {
   indexvideo: './assets/video/index3.mp4',
   indexvideo1: './assets/video/index3.mp4',
   baseUrl: "https://xlive.xinhuaapp.com",
   secretKey: "e9469538b0623783f38c585821459454",
 };
 
var musics = {
	music: {
		src: './assets/music/bg.mp3',
		autoplay: true,
		name: 'bg2',
		loop: true
	}
};

 (function () {

 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
 		handleFontSize();
 	} else {
 		if (document.addEventListener) {
 			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
 		} else if (document.attachEvent) {
 			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
 			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
 		}
 	}

 	function handleFontSize() {
 		// 设置网页字体为默认大小
 		WeixinJSBridge.invoke('setFontSizeCallback', {
 			'fontSize': 0
 		});
 		// 重写设置网页字体大小的事件
 		WeixinJSBridge.on('menu:setfont', function () {
 			WeixinJSBridge.invoke('setFontSizeCallback', {
 				'fontSize': 0
 			});
 		});
 	}
 })();