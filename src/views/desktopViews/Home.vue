<script>
import gsap from 'gsap';
import Splitting from "splitting";
import SplitTextJS from 'split-text-js';
import SplitText from '@/myClass/splitText';

export default {
	name: 'Home',
	mounted () {

		let split = new SplitText({target: '#home .paragraph-1'});

		gsap.from(split.chars, {
			duration: 0.7, 
			ease: "sine.inOut", 
			yPercent: 100,
			opacity: 0, 
			stagger: 0.02,
			// Remove the extra markup when it's done
			onComplete: () => {
				split.reverse();
			}
		});
	},
	methods: {
	},
}
</script>

<template>
	<div id='home'>

		<p class='paragraph-1'>Hi,<br/>My name is <span class='italic-text'>Louise Peredes Fantozzi </span>
		</p>
		<p class='paragraph-2'>
			I'm <span class='italic-text'> French </span> student <br/> 
			in the <span class='italic-text'> DUT Information Communication </span> <br/>
			speciality <span class='italic-text'> Advertising </span> and <br/>
			I'm passionate about <span class='italic-text'> Graphic Design </span> <br/>
		</p>
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

	.paragraph-2 {
		text-align: right;
	}
}
	
</style>