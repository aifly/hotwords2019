<template>
	
	<div  class="lt-full zmiti-index-main-ui " :style="{background:'url('+imgs.index+') no-repeat center center',backgroundSize:'cover'}">
		<div class="zmiti-index-logo" :class='{"hide":hiddenLogo}'>
			<img :src="imgs.logo" alt="">
		</div>
		<div class='zmiti-index-title' :class='{"active":scaleTiele}'>
			<img :src="imgs.title" alt="">
		</div>

		<div class='zmiti-index-entry flash' v-tap='[entryRemark]'>
			<img :src="imgs.entry" alt="" class='zmiti-prevent-img'>
		</div>

		<div v-show='showRemarkPage' class="lt-full zmiti-index-remark" :style="{background:'url('+imgs.remark+') no-repeat center center',backgroundSize:'cover'}">

			<div class='zmiti-index-cover-C'>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
				<div class="zmiti-index-cover" :class='{"active":showRemark}'></div>
			</div>
		</div>
	</div>

</template>

<script>
	import './index.css';
	import zmitiUtil from '../lib/util';
	import '../lib/html2canvas.js';
	export default {
		props:[],
		name:"zmiti-index-page",
		data(){
			return{
				scaleTiele:false,
				hiddenLogo:false,
				showRemark:false,
				showRemarkPage:false,
				imgs:window.imgs,
				secretKey: "e9469538b0623783f38c585821459454",
                host: "https://xlive.xinhuaapp.com", //测试域名：https://testxlive.xinhuaapp.com
				viewH:window.innerHeight,
				viewW:window.innerWidth,
			}
		},
		components:{
		},
		
		methods:{
			

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
							//s.createImg = src;
							s.cacheImg = src;

							setTimeout(() => {
								s.createClass = 'active';
							}, 20);
					      },
					      width: dom.clientWidth,
					      height:dom.clientHeight
					})
				},500);
			},
			 
			entryRemark(){
				this.hiddenLogo = true;
				this.scaleTiele = true;
				setTimeout(()=>{
					this.showRemarkPage = true;
					setTimeout(()=>{
						this.showRemark = true;
					},10)
				},400)
			},
		  
		 

			 
			updatePv(){
				var s = this;
				axios.post(s.host + '/xhs-security-activity/activity/num/updateNum', {
						"secretKey": s.secretKey, // 请求秘钥
						"nm": "gcbn" // 活动某组图片点赞标识 或者活动某组图片浏览量标识 标识由更新接口定义
					}).then(function (data) {
						var dt = data.data;
						if (typeof dt === 'string') {
							dt = JSON.parse(dt);
						}
						console.log(dt);

					});
			}
		},
		mounted(){
			
 
		}
	}

</script>