<template>
	<transition name='main'>
		<div class='zmiti-main-ui lt-full' :class="{'show':show}" :style="{background:'url('+imgs.mainBg+') no-repeat center bottom',backgroundSize:'cover'}" >
			<div class="lt-full zmiti-main-road">
				<div class='zmiti-road'>
					<img :src="imgs.road" alt="">
				</div>
				<transition name='modal'>
					<div class='zmiti-modal-C lt-full'>
						<div class="zmiti-h5-title">
							<img :src="imgs.title" alt="">
						</div>
						<div class='zmiti-modal-list' v-swipeleft='swipeLeft' v-swiperight='swipeRight'>
							<ul :class='{"active":openDoor}'>
								<li :style='{height:viewH+"px"}' :class="hw.className" class='lt-full' v-for='(hw,i) in hotWords' :key="i">
									<div class="zmiti-title1" :class="{'active':(hw.className||'').indexOf('active')>-1,'shot':hw.name.length<=2,'long':hw.name.length>=5}" >
										<span v-html='hw.name'></span>
										<span class='zmiti-down' v-if="(hw.className||'').indexOf('active')>-1">
											<img :src='imgs.down' />
										</span>
									</div>
									<div class="zmiti-title">
										<span>{{hw.name.replace(/<[^>]*>|<\/[^>]*>/gm,'')}}讨论室</span>
										<img :src="imgs.titleBg" alt="">
									</div>
									<img :src="imgs[openDoor&&(hw.className||'').indexOf('active')>-1?'doorOpen':'door']" alt="" class='zmiti-prevent-img'>
								</li>
							</ul>
							<div class='zmiti-ar zmiti-ar-l' v-tap='[swipeRight]'>
								<img :src="imgs.arr" alt="">
							</div>
							<div class='zmiti-ar zmiti-ar-r' v-tap='[swipeLeft]'>
								<img :src="imgs.arr" alt="">
							</div>
							<transition name='person'>
									<div class='zmiti-person' v-if='!openDoor'>
									<img :src="person" alt="">
								</div>
								
							</transition>
							<div class="zmiti-discuss flash" v-tap='[entryDiscuss]'>
								<img :src="imgs.discussBtn" alt="">
							</div>

							<div class="zmiti-rank-btn" v-tap='[activeRank]'>
								<img :src="imgs.rankBtn" alt="">
							</div>
							<div class="zmiti-active-btn" v-if='false'>
								<img :src="imgs.activeBtn" alt="">
							</div>
						</div>
					</div>
			 	</transition>

			 	<transition name='scene'>
			 		<div v-if='showScene' class="zmiti-scene-ui lt-full" :style="{background:'url('+imgs.scene+') no-repeat center bottom',backgroundSize:'cover'}">
			 			<template v-if='!showInput'>
					 		<div class="zmiti-back" v-tap='[backToMain]'>
					 			<img :src="imgs.back" alt="">
					 		</div>

					 		<div class="zmiti-scene-title">
					 			<img :src="imgs.sceneTitle" alt="">
					 			<span>{{hotWords[currentIndex].name.replace(/<[^>]*>|<\/[^>]*>/gm,'')}}</span>
					 		</div>

					 		<div class="zmiti-black">
					 			<img :src="imgs.black" alt="">
					 			<div class="zmiti-talk-C" ref='talk'>
					 				<ul>
					 					<li v-for='(talk,i) in hotWords[currentIndex].talkList'>
					 						<div>
					 							<img :src="imgs.user1" alt="">
					 						</div>
					 						<div :class='{"isMe":talk.isMe}' class="zmiti-talk-content">
					 							{{talk.comment}}
					 						</div>
					 					</li>
					 				</ul>
					 			</div>
					 		</div>

					 		<div class="zmiti-say flash" v-tap='[say]'>
					 			<img :src="imgs.say" alt="">
					 		</div>

					 		<div class="zmiti-photo" v-tap='[photo]'>
					 			<img :src="imgs.photo" alt="">
					 		</div>
			 			</template>
			 			<template v-else>
			 				<div class="zmiti-back" v-tap='[backToMsg]'>
					 			<img :src="imgs.back1" alt="">
					 		</div>
					 		<div class='zmiti-input-C'>
					 			<div class="zmiti-input">
					 				<img :src="imgs.input" alt="">
					 				<textarea ref='input' placeholder="请输入您要留言的内容~~" v-model='msg'></textarea>
					 			</div>
					 			<div class="zmiti-submit-success" v-show='isSuccess'>
					 				<img :src="imgs.right" alt="">
					 				<div>您参与的{{hotWords[currentIndex].name.replace(/<[^>]*>|<\/[^>]*>/gm,'')}}热词讨论的留言，</div>
					 				<div>已经提交成功进入评审阶段，</div>
					 				<div>敬请关注。</div>
					 			</div>
					 			<div v-if='isSuccess' class="zmiti-input-btns">
					 				<div v-tap='[backToMainBySubmit]'>
					 					<img :src="imgs.rechoose" alt="">
					 				</div>
					 				<div v-tap='[photo]'>
					 					<img :src="imgs.photo1" alt="">
					 				</div>

					 			</div>
					 			<div class="zmiti-submit" v-else v-tap='[submit]'>
					 				<img :src="imgs.submit" alt="">
					 			</div>
					 		</div>
			 			</template>

				 	</div>
			 	</transition>
				
				<transition name='share'>
					<div class="zmiti-main-share-ui lt-full" :style="{background:'url('+imgs.loading+') no-repeat center bottom',backgroundSize:'cover'}" v-if='showSharePage'>
						<div class="lt-full" v-if='!createImg'>
							
							<div class="zmiti-waiting-C">
								<div>
									<img :src="imgs.waiting" alt="">
								</div>
								<div class='zmiti-point'>
									<img :src="imgs.point" alt="">
								</div>
							</div>
						</div>
						<div class="zmiti-h5-title">
							<img :src="imgs.title" alt="">
						</div>
						<div class='zmiti-createimg ' :class="{'active':scaleCreateImg}">
							<div  v-if='createImg' class='zmiti-createimg1'>
								<img :src="createImg" alt="">
								<div class='zmiti-share-tip' v-if='scaleCreateImg'>长按保存图片</div>
							</div>
							<div v-else ref='page'>
								<img :src="imgs[isSuccess?'certificate2':'certificate1']" alt="">
								<div class='zmiti-hotword-img' :class="{'active':isSuccess}">
									<img :src="hotWords[currentIndex].img" alt="">
								</div>
							</div>
						</div>
						<div class='zmiti-main-share-btns'>
							<div v-tap='[backToMainBySubmit]'>
								<img :src="imgs.rechoose" alt="">
							</div>
							<div v-tap='[toggleMask,true]'>
								<img :src="imgs.share" alt="">
							</div>
						</div>
					</div>
				</transition>

				<div class="lt-full zmiti-rank-ui"  v-if='showRank'   :style="{background:'url('+imgs.loading+') no-repeat center bottom',backgroundSize:'cover',height:viewH+'px'}">
					<div class='zmiti-back' v-tap='[backToMain]' style="z-index:1000">
						<img :src="imgs.back1" alt="">
					</div>
					<div class="lt-full" ref='rank'>
						<div style="padding-bottom:130px;">
							<div class='zmiti-rank-title'>
								<img :src="imgs.rankTitle" alt="">
							</div>
							<ul>
								<li v-for='(hw,i) in hotWords ' :key='i'>
									<img :src="imgs.rankNum" alt="">
									<span class='zmiti-rankname'>{{hw.name.replace(/<[^>]*>|<\/[^>]*>/gm,'')}}
										<img :src="imgs.fire" alt="">
										<span class='zmiti-rank-num'>{{hw.num||0}}</span>
									</span>
									
								</li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
			<div class="zmiti-mask lt-full" v-if='showMaskPage' v-tap='[toggleMask,false]'>
				<img :src="imgs.arrow" alt="">
			</div>

			<div class="zmiti-daoyu lt-full" v-if='false'>
				<img :src="imgs.daoyu" alt="">
			</div>
		</div>

	</transition>
</template>

<script>
	import './index.css';
	
	import zmitiUtil from '../lib/util';
	import IScroll from 'iscroll';

	export default {
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
			return {
				showRank:false,	
				createImg:'',
				showMaskPage:false,
				showSharePage:false,
				msg:'',
				showScene:false,
				show:false,
				isSuccess:false,//是否提交成功了。
				imgs:window.imgs,
				secretKey: "e9469538b0623783f38c585821459454",
                host: "https://xlive.xinhuaapp.com", //测试域名：https://testxlive.xinhuaapp.com
				viewW:Math.min( window.innerWidth,750),
				viewH: window.innerHeight,
				currentIndex:0,
				person:window.imgs.person,
				showInput:false,
				openDoor:false,
				scaleCreateImg:false,
				hotWords:window.config.hotWords
			}
		},
	
		components: {},
		watch:{
			showRank(val){
				if(val){
					if(this.rankScroll){
						this.rankScroll.refresh();
						return;
					}
					setTimeout(()=>{
						this.rankScroll = new IScroll(this.$refs['rank'],{
							scrollbars:true
						});
					},20)
					setTimeout(()=>{
						this.rankScroll.refresh();
					},1000)
				}
			}
		},
		methods: {

			activeRank(){
				this.showRank = true;
			},

			toggleMask(flag){

				this.showMaskPage = flag;
			},

			backToMain(){
				this.showScene = false;
				this.showRank = false;
			},

			swipeLeft(){
				var s = this;
				this.isLeftFirst = true;
				this.iNow = (s.currentIndex + 1) % s.hotWords.length;
				this.initLeft();
			},
			swipeRight(){
				var s = this;
				this.iNow = s.currentIndex-1;
				if(this.iNow<0){
					this.iNow = this.hotWords.length - 1;
				}
				this.isRightFirst=  true;
				this.initRight();
			},
			initLeft: function(flag) {
				var s = this;

				this.person = flag ? this.imgs.person : this.imgs.personL;
				
				s.currentIndex = (s.currentIndex + 1) % s.hotWords.length;
				
				//s.loadMusic(s.hotWords[s.currentIndex].audio);
				//this.iNow = s.currentIndex;
				var classList = [
					'left1 transition',
					'left transition',
					'active transition',
					'right ',
					'right1 '
				]
				var hotWords = s.hotWords,
					currentIndex = s.currentIndex;


				hotWords.forEach(function(list, i) {

					if (currentIndex > i) {
						hotWords[i].className = classList[0]
					} else if (currentIndex < i) {
						hotWords[i].className = classList[4]
					}
					(hotWords[currentIndex + 1] || hotWords[0])['className'] = classList[3];
					(hotWords[currentIndex + 2] || hotWords[1])['className'] = classList[4];
					(hotWords[currentIndex - 1] || hotWords[hotWords.length - 1])['className'] = classList[1];
					//(hotWords[currentIndex - 2] || hotWords[hotWords.length - 2])['className'] = classList[0];
				});

				hotWords[currentIndex].className = classList[2];
				s.hotWords = hotWords.concat([]);
			},
			initRight: function() {
				this.person = this.imgs.personR;
				var s = this;
				s.currentIndex = s.currentIndex - 1;

				if (s.currentIndex < 0) {
					s.currentIndex = s.hotWords.length - 1;
				}
				//this.iNow = s.currentIndex;
				
				var hotWords = s.hotWords,
					currentIndex = s.currentIndex;


				//console.log(s.currentIndex)

				s.currentIndex = s.currentIndex % hotWords.length;

				var classList = [
					'left1 ',
					'left ',
					'active transition',
					'right transition',
					'right1 transition'
				]

				hotWords.forEach(function(list, i) {

					if (currentIndex > i) {
						hotWords[i].className = classList[0]
					} else if (currentIndex < i) {
						hotWords[i].className = classList[4]
					}

					(hotWords[currentIndex + 1] || hotWords[0])['className'] = classList[3];
					(hotWords[currentIndex + 2] || hotWords[1])['className'] = classList[4];
					(hotWords[currentIndex - 1] || hotWords[hotWords.length - 1])['className'] = classList[1];
					//(hotWords[currentIndex - 2] || hotWords[hotWords.length - 2])['className'] = classList[0];
				})



				hotWords[currentIndex].className = classList[2];
				s.hotWords = hotWords.concat([]);
			},

			backToMainBySubmit(){
				this.createImg = '';
				this.rechoose();
				this.backToMain();
			},


			rechoose(){
				this.showSharePage = false;
				this.showInput = false;

			},

			entryDiscuss(){
				setTimeout(()=>{
					this.openDoor = true;
				},500)
				setTimeout(()=>{
					
					this.showScene = true;

					setTimeout(()=>{
						this.scroll = new IScroll(this.$refs['talk'],{
							scrollbars:true
						});
					},10)
				},1600)

				setTimeout(()=>{
					this.scroll.refresh();
					this.openDoor = false;
				},3000);
				var  s = this;

				/*
				
				*/
				axios.post(this.host+"/xhs-security-activity/activity/comment/getComment",{
					"secretKey": s.secretKey, // 请求秘钥
					"nm": "xhs-hotwords2019-"+(s.currentIndex+1), // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
					pn:1,
					ps:1000
				}).then(data=>{
					var dt = data.data;
					if(typeof dt === 'string'){
						dt = JSON.parse(dt);
					}
					if(dt.rc === 0){
						s.hotWords[s.currentIndex].talkList = dt.data.lst;
						//console.log(s.hotWords[s.currentIndex].talkList)
					}
				})

			},
			say(){//我要发言
				this.showInput = true;
			},
			backToMsg(){
				this.showInput = false;
				setTimeout(()=>{
					setTimeout(()=>{
						this.scroll = new IScroll(this.$refs['talk'],{
							scrollbars:true
						});
					},10)
				},10)
			},
			submit(){
				var  s = this;
				var D = new Date();
				var year = D.getFullYear();
				var month = D.getMonth()+1;
				var date = D.getDate();
				var hours = D.getHours();
				var mins = D.getMinutes();
				var seconds = D.getSeconds();

				this.$refs['input'].blur();

				axios.post(this.host+"/xhs-security-activity/activity/comment/saveComment",{
					"secretKey": s.secretKey, // 请求秘钥
					"nm": "xhs-hotwords2019-"+(s.currentIndex+1), // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
					comment:s.msg,
					submit:[year,month,date].join('-')+ ' ' + [hours,mins,seconds].join(':'),
				}).then(data=>{
					var dt = data.data;
					if(typeof dt === 'string'){
						dt = JSON.parse(dt);
					}
					console.log(dt);
					if(dt.rc === 0){
						s.isSuccess = true;
						//s.hotWords[s.currentIndex].talkList = dt.data.lst;
						//console.log(s.hotWords[s.currentIndex].talkList)
					}
				})
			},
			html2img(){
				var s = this;

				var {obserable} = this;

				//document.title = '开始截图....'

				setTimeout(()=>{
					//this.showLoading = true;
					var ref = 'page';
					var dom = this.$refs[ref];
					html2canvas(dom,{
						useCORS: true,
						onrendered: function(canvas) {
					        var src = canvas.toDataURL();
							//s.mergeImg = '';
							s.createImg = src;

							setTimeout(()=>{
								s.scaleCreateImg = true;
							},200)

					      },
					      width: dom.clientWidth,
					      height:dom.clientHeight
					})
				},500);
			},
			photo(){
				this.showSharePage = true;
				this.html2img();
			}
		},
	
		mounted() {
			this.initLeft(true);
			var {obserable } = this;
			obserable.on('toggleMain',(data)=>{
				this.show = data.show;
				
			});

			
			

			var  s = this;
			this.hotWords.forEach((item,i)=>{
				return (function(a){
					axios.post(s.host+"/xhs-security-activity/activity/comment/getComment",{
						"secretKey": s.secretKey, // 请求秘钥
						"nm": "xhs-hotwords2019-"+(a+1), // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
						pn:1,
						ps:1000
					}).then(data=>{

						var dt = data.data;
						if(typeof dt === 'string'){
							dt = JSON.parse(dt);
						}
						if(dt.rc === 0){
							s.hotWords[a].num = dt.data.num;
							s.hotWords = s.hotWords.concat([]);
						}
					})
				})(i);
			});
			
		}
	
	}
</script>
