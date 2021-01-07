<script>
import { mapState } from 'vuex';
import ImageOrVideo from '@/components/ImageOrVideo.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'WorkPage',
	components: {
		ImageOrVideo
	},
	props: ['id'],
	data() {
		return {
		}
	},
	mounted () { 
		this.createAboutScroll();
		this.loaded(this.$refs[this.work.title]);
	},
	methods: {
		createAboutScroll() {
			ScrollTrigger.create({
				trigger:'.about-list',
				start:'top top+=24px',
				endTrigger: "about-my-work",
				end: "bottom bottom",
				pin: true,
				scrub: 1,
			});
		},
	},
	computed:  {
		...mapState(['works']),
		work() {
			return this.works[this.id];
		}
	},
}
</script>

<template>
	<div id="my-work" v-if="work">

		<h2 class="italic-text"> {{ work.title }} </h2>

		<div class="container">

			<div class="illustration-section">
				<ImageOrVideo 
					ref='illustration1' 
					class="illustration-1" 
					:src="work.illustrations[0].id"  
					:alt="work.illustrations[0].alternative"
					:type="work.illustrations[0].type"
				/>

				<ImageOrVideo 
					class="illustration-2" 
					ref='illustration2' 
					:src="work.illustrations[1].id"  
					:alt="work.illustrations[1].alternative"
					:type="work.illustrations[1].type"
				/>
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
							<p v-html="work.description"> 
							</p>
						</div>
					</li>
				</ul>
			</div>

		</div>

	</div></template>

<style lang='scss' scoped>

#my-work {
	margin-top: $global-padding;

	h2 {
		margin-bottom: $global-padding;
		font-size: $big-font-size;
		color: $primary-color;
		font-weight: normal;
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

			.illustration-1 {
				position: relative;
				width: calc(100% + #{$global-padding});
				margin-left: -$global-padding;
				margin-bottom: $global-padding;
			}
			.illustration-2{
				width: 100%;
				height: auto;	
			}

		}
	}
}

</style>