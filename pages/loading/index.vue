<template>
	<transition name='loading'>
		<div ref='page'  class="lt-full zmiti-loading " :style="{background:'url('+imgs.index+') no-repeat center center',backgroundSize:'cover'}" v-if='show' >
			<div class='zmiti-loading-bar'>
				<img :src="imgs.loading" alt="">
				<div>
					<span :style='{width:width+"px"}'></span>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import zmitiUtil from '../lib/util';
	export default {
		props:['width','obserable'],
		name:'zmitiloading',
		data(){
			return {
				imgs:window.imgs,
				viewW:Math.min(window.innerWidth,750),
				viewH:window.innerHeight,
				show:true,
			}
		},
		components:{
		},
		
		methods:{

			imgStart(e){
				e.preventDefault(); 
			},
		},
		mounted(){
			this.obserable.on('hideloading',()=>{
				this.show = false;
			});

		}
	}
</script>