﻿window.imgs = {
  logo: "./assets/images/logo.png",
  point: "./assets/images/point.png",
  arrow: "./assets/images/arrow.png",
  play1:'./assets/images/play1.png',
  play:'./assets/images/play.png',
  index:'./assets/images/index.png',
  point:'./assets/images/point.png',
  waiting:'./assets/images/waiting.png',
  tip:'./assets/images/tip.png',


  entry:'./assets/images/entry.png',
  title:'./assets/images/title2.png',
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
  photo1:'./assets/images/photo1.png',
  rechoose:'./assets/images/rechoose.png',
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
  certificate2:'./assets/images/certificate2.jpg',
  certificate1:'./assets/images/certificate1.jpg',
  mainBg:'./assets/images/main-bg.jpg',
  back1:'./assets/images/back1.png',
  submit:'./assets/images/submit.png',
  input:'./assets/images/input.png',
  share:'./assets/images/share.png',
  img1:'./assets/images/1.png',
  img2:'./assets/images/2.png',
  img3:'./assets/images/3.png',
  img4:'./assets/images/4.png',
  img5:'./assets/images/5.png',
  img6:'./assets/images/6.png',
  img7:'./assets/images/7.png',
  img8:'./assets/images/8.png',
  img9:'./assets/images/9.png',
  img10:'./assets/images/10.png',
  img11:'./assets/images/11.png',
  img12:'./assets/images/12.png',
  img13:'./assets/images/13.png',
  img14:'./assets/images/14.png',
  img15:'./assets/images/15.png',
  img16:'./assets/images/16.png',
  img17:'./assets/images/17.png',
  img18:'./assets/images/18.png',
  img19:'./assets/images/19.png',
  img20:'./assets/images/20.png',
  img21:'./assets/images/21.png',
  img22:'./assets/images/22.png',
  img23:'./assets/images/23.png',
  activeBtn:'./assets/images/active-btn.png',
  rankBtn:'./assets/images/rank-btn.png',
  rankTitle:'./assets/images/rank-title.png',
  rankNum:'./assets/images/rank-num.png',
  right:'./assets/images/right.png',
  fire:'./assets/images/fire.png',
  daoyu:'./assets/images/daoyu.png',


};


 
 
var arr = [];
 
 
for (var attr in imgs) {
	arr.push(imgs[attr]);
}

 window.config = {
   indexvideo: './assets/video/index3.mp4',
   indexvideo1: './assets/video/index3.mp4',
   baseUrl: "https://xlive.xinhuaapp.com",
   host:"https://xlive.xinhuaapp.com", //正式域名：https://testxlive.xinhuaapp.com
   secretKey: "e9469538b0623783f38c585821459454",
   hotWords:[
      {
        name:'依法治国',

        talkList:[
          
        ]
      },
      {
        name:'反腐倡廉',

        talkList:[

        ]
      },
      {
        name:'数字经济',

        talkList:[
          
        ]
      },
      {
        name:'生态环保',

        talkList:[

        ]
      },
      {
        name:'精准脱贫',

        talkList:[

        ]
      },
      {
        name:'教育质量',

        talkList:[
          
          
          



        ]
      },
      {
        name:'医疗',

        talkList:[
          
          
          



        ]
      },
      {
        name:'养老',

        talkList:[
          
          
          



        ]
      },
      {
        name:'住房',

        talkList:[
          
          
          



        ]
      },
      {
        name:'就业创业',

        talkList:[
          
          
          



        ]
      },
      {
        name:'食品安全',

        talkList:[
          
          
          



        ]
      },
      {
        name:'社会保障',

        talkList:[
          
          
          



        ]
      },
      {
        name:'居民收入',

        talkList:[
          
          
          



        ]
      },
      {
        name:'科研创新',

        talkList:[
          
          
          



        ]
      },
      {
        name:'对外开放',

        talkList:[
          
          
          



        ]
      },
      {
        name:'新型<br/>城镇化',

        talkList:[
          
          
          
          


        ]
      },
      {
        name:'物流交通',

        talkList:[
          
          
          



        ]
      },
      {
        name:'农业农村',

        talkList:[
          
          
          



        ]
      },
      {
        name:'生活消费',

        talkList:[
          
          
          



        ]
      },
      {
        name:'文化体育',

        talkList:[
          
          
          



        ]
      },
      {
        name:'强军兴军',

        talkList:[
          
          
          



        ]
      },
      {
        name:'营商环境',

        talkList:[
          
          
          



        ]
      },
      {
        name:'减税降费',

        talkList:[
          
          
          



        ]
      },
      
   ]
 };
 
 window.config.hotWords.forEach(function(item,i){
  item.img = imgs['img'+(i+1)];
 })
var musics = {
	music: {
		src: './assets/music/bg1.mp3',
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