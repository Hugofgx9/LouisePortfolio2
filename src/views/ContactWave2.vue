<script>
import gsap from 'gsap';

export default {
	name: 'Contact',
	mounted: function () {
		this.textWave();
		

	},
	methods: {
		getEachCharaFromText: function () {
			let el = document.querySelector('#contact .paragraph-1');
			let text = el.textContent;
			let textArray = [];
			for (let i = 1; i < text.length; i++) {
				if (text.charAt(i) != ' ') {
					textArray.push(text.charAt(i));
				} //delete space from the array
			}
			console.log(textArray);
		},

		textWave: function () {
			let elContainer = document.querySelector('#contact .paragraph-1');
			let timeIndex = 0;
			let amplitude = 0.2;
			let letters;
			let spanArray = [], tagsArray = [];

			function Letter (el, initWidth) {
				this.el = el;
				this.initWidth = initWidth;
			}

			function Tag (el, index) {
				this.el = el;
				this.index = index;
			}

			function pxtovw (px) {
				let vw = px / document.documentElement.clientWidth *100;
				return vw;
			}



			function init () {
				let text = elContainer.textContent;
				let textWithTags = elContainer.innerHTML;
				letters = text.split('');
				letters = letters.slice(1);
				elContainer.innerText='';


				function selectAllTags (container) {
					for(let i=0; i<container.length; i++) {
						if (container[i] === "<") {
							for(let j=i; j<container.length; j++) {
								if (container[j] === ">") {
									let tag = container.substring(i, j+1);
									tagsArray.push(new Tag(tag, i - 1));
									break;
								}
							}
						}
					}
				}

				function replaceTextBySpan () {
					let tagsLength = 0;
					let htmlString = '';

					letters.forEach(function (letter, i) {
						tagsArray.forEach(function (tag) {
							if (i + tagsLength == tag.index) {
								tagsLength += tag.el.length;
								htmlString += tag.el;
							}
						});

						let span = "<span class='wave-letter'>" + letter + "</span>";
						htmlString += span;
					});
					elContainer.appendChild(document.createRange().createContextualFragment(htmlString));
				}

				function getSpanAndWidth () {
					elContainer.getElementsByClassName("wave-letter").forEach(function(span) {
						span.style.display = 'inline-block';
						span.style.color ='inherit';
						let width;
						if (span.textContent == ' ') {
							width = 15;
						}
						else {
							width = getComputedStyle(span).width;
							width = parseFloat(width.slice(0, -2));
						}
						width = pxtovw (width);
						span.style.width = width +"vw";
						span.style.transform = "scaleX(1)";
						spanArray.push(new Letter(span, width));
					})
				}
				selectAllTags (textWithTags);
				replaceTextBySpan ();
				getSpanAndWidth ();
			}

			function update () {
				let timeIndex = 0;

				spanArray.forEach(function (letter, i) {
					timeIndex -= 0.1;
					gsap.fromTo(letter.el, 2,
						{scaleX: 1.3, width: letter.initWidth * 1.3 +'vw'},
						{scaleX: 0.4, width: letter.initWidth * 0.4 +'vw', ease: 'sine.easeInOut', repeat: -1, yoyo: true, 
							delay: timeIndex});
				});
			}

			init();
			update();
		}
	}
}
</script>

<template>
	<div id='contact'>
		<p class='paragraph-1'>
			Contact me in mail
			<a href='mailto:louiseperedesfantozzi@gmail.com'>
				<span class='italic-text'>louiseperedesfantozzi@gmail.com</span>
			</a>
			or if you prefer, <br/>
			I'm present on LinkedIn
			<a href='https://www.linkedin.com/in/louise-peredes-fantozzi-0457a719a/' target='_blank'>
				<span class="italic-text">Louise Peredes Fantozzi</span>
			</a>
			and on Instagram :
			<a href="https://www.instagram.com/louiseperedesfantozzi/" target="_blank">
				<span class="italic-text">@louiseperedesfantozzi</span>
			</a>
		</p>

	</div>
</template>

<style lang='scss' scoped>

#contact{
	font-size: $big-font-size;
	display: grid;
	height: 100%;

	.paragraph-1 {
		text-align: right;

		span {
			display: block;
		}
	}
}
	
</style>