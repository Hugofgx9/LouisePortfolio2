<script>
export default {
	name: 'Contact',
	mounted: function () {
		this.textWave();
		

	},
	methods: {
		getEachCharaFromText: function () {
			let el = document.querySelector('#contact p');
			let text = el.textContent;
			let textArray = [];
			for (let i = 1; i < text.length; i++) {
				if (text.charAt(i) != ' ') {
					textArray.push(text.charAt(i));
				} //delete space from the array
			}
			console.log(textArray);
		},

		textWave () {
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
								//elContainer.appendChild(document.createRange().createContextualFragment(tag.el));
							}
						});

						let span = "<span class='wave-letter'>" + letter + "</span>";
						// let span = document.createElement("span");
						//span.innerText = letter;
						// span.style.display = 'inline-block';
						// span.style.position = 'relative';
						htmlString += span;




						// let span = document.createElement("span");
						// span.innerText = letter;
						// span.style.display = 'inline-block';
						// span.style.position = 'relative';
						// let wave = (Math.sin(i * amplitude)) / 4 + 0.8;
						// span.style.transform = "scaleX(" + wave + ")"; //scale dont change dim of the box
						// elContainer.appendChild(span);
						// let widthBeforeTransform;
						// if (letter == ' ') {
						// 	widthBeforeTransform = 15;
						// }
						// else {
						// 	widthBeforeTransform = getComputedStyle(span).width;
						// 	widthBeforeTransform = parseFloat(widthBeforeTransform.slice(0, -2));
						// }
						// let newWidth = widthBeforeTransform * wave;
						// span.style.width = newWidth + "px";
						// spanArray.push(new Letter(span, widthBeforeTransform));
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
						span.style.width = width +"px";
						span.style.transform = "scaleX(1)";
						spanArray.push(new Letter(span, width));
					})
				}
				selectAllTags (textWithTags);
				replaceTextBySpan ();
				getSpanAndWidth ();

			}

			function update () {
				timeIndex += 0.2;
				spanArray.forEach(function (letter, i) {
					let wave = (Math.sin(i * amplitude + (timeIndex * 0.1))) / 4 + 0.8; 
					letter.el.style.transform = "scaleX(" + wave + ")"; //scale dont change dim of the box
					let newWidth = letter.initWidth * wave;
					letter.el.style.width = newWidth + "px";
				});
			}

			init();
			setInterval( update , 2);
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