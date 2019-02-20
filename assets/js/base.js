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
  personL:'./assets/images/person-l.png',
  personR:'./assets/images/person-r.png',
  arr:'./assets/images/arr.png',
  titleBg:'./assets/images/titlebg.png',
  say:'./assets/images/say.png',
  back:'./assets/images/back.png',
  photo:'./assets/images/photo.png',
  doorOpen:'./assets/images/door-open.jpg',
  road:'./assets/images/road.png',
  down:'./assets/images/down.png',
  black:'./assets/images/black.png',
  user1:'./assets/images/user1.png',
  user2:'./assets/images/user2.png',
  sceneTitle:'./assets/images/scene-title.png',
  discussBtn:"./assets/images/discuss-btn.png",
  loading:'./assets/images/loading.jpg',
  scene:'./assets/images/scene.jpg',
  mainBg:'./assets/images/main-bg.jpg'

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
   hotWords:[
      {
        name:'依法治国'
      },
      {
        name:'反腐倡廉'
      },
      {
        name:'数字经济'
      },
      {
        name:'生态环保'
      },
      {
        name:'精准脱贫'
      },
      {
        name:'教育质量'
      },
      {
        name:'医疗'
      },
      {
        name:'养老'
      },
      {
        name:'住房'
      },
      {
        name:'就业创业'
      },
      {
        name:'食品安全'
      },
      {
        name:'社会保障'
      },
      {
        name:'居民收入'
      },
      {
        name:'科研创新'
      },
      {
        name:'对外开放'
      },
      {
        name:'新型<br/>城镇化'
      },
      {
        name:'物流交通'
      },
      {
        name:'农业农村'
      },
      {
        name:'生活消费'
      },
      {
        name:'文化体育'
      },
      {
        name:'强军兴军'
      },
      {
        name:'营商环境'
      },
      {
        name:'减税降费'
      },
      
   ]
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