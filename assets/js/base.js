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


  entry:'./assets/images/entry1.png',
  title:'./assets/images/title3.png',
  remark:'./assets/images/remark.png',
  door:'./assets/images/door.png',
  person:'./assets/images/person.png',
  personL:'./assets/images/person-l.png',
  personR:'./assets/images/person-r.png',
  arr:'./assets/images/arr.png',
  titleBg:'./assets/images/titlebg.png',
  say:'./assets/images/say1.png',
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
  discussBtn:"./assets/images/discuss-btn1.png",
  loading:'./assets/images/loading.jpg',
  scene:'./assets/images/scene.jpg',
  //certificate2:'./assets/images/certificate2.jpg',
  certificate1:'./assets/images/certificate1.jpg',
  mainBg:'./assets/images/main-bg.jpg',
  back1:'./assets/images/back1.png',
  submit:'./assets/images/submit1.png',
  input:'./assets/images/input.png',
  share:'./assets/images/share.png',
  img1:'./assets/images/1-1.png',
  img2:'./assets/images/2-1.png',
  img3:'./assets/images/3-1.png',
  img4:'./assets/images/4-1.png',
  img5:'./assets/images/5-1.png',
  img6:'./assets/images/6-1.png',
  img7:'./assets/images/7-1.png',
  img8:'./assets/images/8-1.png',
  img9:'./assets/images/9-1.png',
  img10:'./assets/images/10-1.png',
  img11:'./assets/images/11-1.png',
  img12:'./assets/images/12-1.png',
  img13:'./assets/images/13-1.png',
  img14:'./assets/images/14-1.png',
  img15:'./assets/images/15-1.png',
  img16:'./assets/images/16-1.png',
  img17:'./assets/images/17-1.png',
  img18:'./assets/images/18-1.png',
  img19:'./assets/images/19-1.png',
  img20:'./assets/images/20-1.png',
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
        id:'xhs-hotwords2019-1',
        name:'深化改革',

        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-2',
        name:'法治建设',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-3',
        name:'反腐倡廉',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-4',
        name:'对外开放',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-5',
        name:'生态环保',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-6',
        name:'精准脱贫',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-7',
        name:'教育质量',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-8',
        name:'医疗改革',

        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-9',
        name:'养老服务',

        talkList:[

        ]
      },
      {
        id:'xhs-hotwords2019-10',
        name:'住房保障',

        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-11',
        name:'就业创业',

        talkList:[
          
        ]
      },
      {
        id:'xhs-hotwords2019-12',
        name:'食品安全',

        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-13',
        name:'居民收入',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-14',
        name:'科研创新',

        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-15',
        name:'新型<br/>城镇化',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-16',
        name:'物流交通',

        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-17',
        name:'乡村振兴',
        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-18',
        name:'生活消费',

        talkList:[
        ]
      },
      {
        id:'xhs-hotwords2019-19',
        name:'文化体育',

        talkList:[
          
        ]
      },
      {
        id:'xhs-hotwords2019-20',
        name:'强军兴军',
        talkList:[

        ]
      }
      
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