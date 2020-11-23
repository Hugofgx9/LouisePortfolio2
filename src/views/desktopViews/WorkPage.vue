<script>
import { mapState } from 'vuex';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'WorkPage',
	data() {
		return {
			loaded: false,
		}
	},
	mounted () {
		this.createAboutScroll();
		this.preloadImg(`https://drive.google.com/uc?id=${this.work.illustrations[0].id}`);
	},
	methods: {
		createAboutScroll: () => {
			ScrollTrigger.create({
				trigger:'.about-list',
				start:'top top+=24px',
				endTrigger: "about-my-work",
				end: "bottom bottom",
				pin: true,
				scrub: 1,
			});
		},
		preloadImg: function(url) {
			let img = new Image();
			img.src = url;
			img.onload = () => {
				console.log('img loaded')
				this.loaded = true;
			};
		},
	},
	computed:  {
		...mapState(['works']),
		work: function() {
			//console.log(Object.entries(this.works).map(([key, value]) => ({key,value})));
			return this.works[this.$route.params.id];
		}
	},
}
</script>

<template>
	<div id="my-work" v-if="works && loaded">

		<h2> {{ work.title }} </h2>

		<div class="container">

			<div class="illustration-section">
				<img class="illustration-1" :src="`https://drive.google.com/uc?id=${work.illustrations[0].id}`" 
							:alt="work.illustrations[0].alternative"/>
				<img class="illustration-2" :src="`https://drive.google.com/uc?id=${work.illustrations[1].id}`" 
							:alt="work.illustrations[0].alternative"/>
			</div>

			<div class="about-my-work">
				<ul class="about-list">
					<li class="software">
						<h3>Software</h3>
						<ul class="about-item">
							<li v-for="software in work.software" :key="software"> 
								{{ software }}
							</li>
						</ul>
					</li>
					<li class="project">
						<h3>Project</h3>
						<div class="about-item">
							<p> 
								{{ work.description }} 
							</p>
						</div>
					</li>
				</ul>
			</div>

		</div>

	</div>
</template>

<style lang='scss' scoped>

#my-work {

	h2 {
		margin-bottom: $global-padding;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 405px;

		.about-my-work {
			grid-column: 2;

			h3 {
				font-weight: normal;
				border-bottom: solid 1px #111111;
				font-size: 2em;
				padding-bottom: .3em;
			}

			.about-item {
				margin-top: 18px;
				margin-bottom: 18px;
			}
		}

		.illustration-section {
			margin-right: 10vw;
			position: relative;

			.illustration-2, .illustration-2 {
				width: 100%;
				height: auto;	
			}

			.illustration-1 {
				position: relative;
				width: calc(100% + #{$global-padding});
				margin-left: -$global-padding;
			}
		}
	}
}

</style>