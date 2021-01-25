<script>
import gsap from 'gsap';
import SplitText from '@/utils/splitText';

export default {
	name: 'Contact',
	mounted() {
		this.linkHover();
	},
	methods: {
		linkHover(){
			let $links = document.querySelectorAll('#contact .italic-text');

			$links.forEach( $el => {
				let splitted = new SplitText({ target: $el, split: 'chars'})


				gsap.set(splitted.getChars(), { transformOrigin : '80% left'});

				let rotateChars = gsap.timeline({ paused: true});
				rotateChars.to(splitted.getChars(), .3, {
					transform: 'rotate(15deg)',
					stagger: {
						each: 0.15,
					}
				})

				// bind Events
				splitted.element.addEventListener('mouseenter', () => rotateChars.play())
				splitted.element.addEventListener('mouseleave', () => {
					rotateChars.reverse();
					//rotateChars.pause();
					//console.log(rotateChars);
					//gsap.to(rotateChars, 3, {progress:0});
				})
			})
		},
	}
}
</script>

<template>
	<div id='contact'>
		<div class='paragraph-1'>
			Contact me in mail
			<p>
				<a href='mailto:louiseperedesfantozzi@gmail.com'>
					<span class='italic-text'>louiseperedesfantozzi@gmail.com</span>
				</a>	
			</p>
			or if you prefer, <br/>
			I'm present on LinkedIn
			<p>
				<a href='https://www.linkedin.com/in/louise-peredes-fantozzi-0457a719a/' target='_blank'>
					<span class="italic-text">Louise Peredes Fantozzi</span>
				</a>
			</p>
			and on Instagram :
			<p>
				<a href="https://www.instagram.com/louiseperedesfantozzi/" target="_blank">
					<span class="italic-text">@louise.fantozzi</span>
				</a>
			</p>
		</div>

	</div>
</template>

<style lang='scss' scoped>

#contact{
	font-size: $big-font-size;
	display: grid;
	height: 80vh;
	align-items: center;

	.paragraph-1 {
		text-align: right;

		span {
			display: inline-block;
		}
	}
}
	
</style>