<template>
	<transition name='main'>
		<div class='zmiti-main-ui lt-full' :class="{'show':show}" :style="{background:'url('+imgs.mainBg+') no-repeat center bottom',backgroundSize:'cover'}" >
			<div class="lt-full zmiti-main-road">
				<div class='zmiti-road'>
					<img :src="imgs.road" alt="">
				</div>
				<transition name='modal'>
					<div class='zmiti-modal-C lt-full'>
						<div class='zmiti-modal-list' v-swipeleft='swipeLeft' v-swiperight='swipeRight'>
							<ul>
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
							<div class='zmiti-person'>
								<img :src="person" alt="">
							</div>
							<div class="zmiti-discuss flash" v-tap='[entryDiscuss]'>
								<img :src="imgs.discussBtn" alt="">
							</div>
						</div>
					</div>
			 	</transition>
			 	<div v-if='showScene' class="zmiti-scene-ui lt-full" :style="{background:'url('+imgs.scene+') no-repeat center bottom',backgroundSize:'cover'}">
			 		<div class="zmiti-back" v-tap='[backToMain]'>
			 			<img :src="imgs.back" alt="">
			 		</div>

			 		<div class="zmiti-scene-title">
			 			<img :src="imgs.sceneTitle" alt="">
			 		</div>

			 		<div class="zmiti-black">
			 			<img :src="imgs.black" alt="">
			 		</div>

			 		<div class="zmiti-say flash">
			 			<img :src="imgs.say" alt="">
			 		</div>

			 	</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import './index.css';
	
	import zmitiUtil from '../lib/util';
	
	export default {
	
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
	
			return {
				showScene:true,
				show:true,
				imgs:window.imgs,
				viewW:Math.min( window.innerWidth,750),
				viewH: window.innerHeight,
				currentIndex:0,
				person:window.imgs.person,
				openDoor:false,
				hotWords:window.config.hotWords
			}
		},
	
		components: {},
		methods: {

			backToMain(){
				this.showScene = false;
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

			entryDiscuss(){
				this.openDoor = true;
			}

			

			
		},
	
		mounted() {
			this.initLeft(true);
			var {obserable } = this;
			obserable.on('toggleMain',(data)=>{
				this.show = data.show;
				
			});


			obserable.trigger({
				type:'toggleMain',
				data:{
					show:true
				}
			})
			
		}
	
	}
</script>
