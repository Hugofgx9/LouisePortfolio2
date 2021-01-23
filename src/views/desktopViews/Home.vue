<script>
//import OvalLink from '@/components/OvalLink.vue';
import DraggableLink from '@/components/DraggableLink.vue';
import { gsap, Power1 } from "gsap";

export default {
	name: 'Home',
	components: {
		//OvalLink,
		DraggableLink,
	},
	data () {
		return {
			activeBtn: true,
		}
	},
	mounted () {
		this.animation();
	},
	methods: {
		animation(){
			let tl = gsap.timeline();
			tl.from('#home .paragraph-1', 0.8,{
				opacity: 0,
				ease: Power1.easeInOut,
			})
			.from('#home .paragraph-2', 1, {
				opacity: 0,
				ease: Power1.easeInOut,
			}, '<0.5')
		},
	},
}
</script>

<template>
	<div id='home'>

		<p class='paragraph-1'>Hi,<br/>My name is <span class='italic-text'>Louise Peredes Fantozzi </span>
		</p>
		<div class="second-part">
			<p class='paragraph-2'>
				I'm <span class='italic-text'>French</span> student<br/> 
				in the <span class='italic-text'>DUT Information Communication</span><br/>
				speciality <span class='italic-text'>Advertising</span> and<br/>
				I'm passionate about <span class='italic-text'>Graphic Design</span><br/>
			</p>
			<DraggableLink text="View my works" to="/works" color="black" class="button" />
		</div>
	</div>
</template>

<style lang='scss' scoped>

#home{
	font-size: $big-font-size;
	display: grid;
	height: 100%;
	grid-template-rows: 1.1fr 1fr;
	align-items: center;

	.italic-text {
		overflow : hidden;
	}

	.paragraph-1 {
	}

	.second-part {
		position: relative;

		.button{
			cursor: move;
			position: absolute;
			bottom: 0;
			z-index: 2;
			width: 160px;
			height: 45px;
		}
	}

	.paragraph-2 {
		text-align: right;
	}
}
	
</style>