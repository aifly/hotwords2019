<template>
	<transition name='loading'>
		<section v-if='show' class="lt-full zmiti-loading1" :style="{background:'url('+imgs.loading+') no-repeat center bottom',backgroundSize:'cover'}">
			<div class='zmiti-loading-ui'>
				<div class='zmiti-loading-pig'>
					<img :style="{WebkitTransform:'translateX('+(width/100)*430+'px)'}" :src="imgs.title" alt="" >
				</div>
				<div class='zmiti-loading-C'>
					<div class='zmiti-loading-bar red active' :data-percent="width" :style="{width:(width/100)*500+'px'}">  </div>
				</div>
				
			</div>
		</section>
	</transition>
</template>

<script>
	import './index.css';
	import zmitiUtil from '../lib/util';
	export default {
		props:['width','obserable'],
		name:'zmitiindex',
		data(){
			return{
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