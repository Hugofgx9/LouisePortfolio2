<script>
import { mapState } from 'vuex';
import ImageOrVideo from '@/components/ImageOrVideo.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'MobileWorkPage',
	components: {
		ImageOrVideo
	},
	props: ['id'],
	data() {
		return {
			loaded: false,
		}
	},
	mounted () { 
	},
	methods: {
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

			<ImageOrVideo 
				class="illustration-1" 
				ref='illustration1' 
				:src="`https://drive.google.com/uc?id=${work.illustrations[0].id}`"  
				:alt="work.illustrations[0].alternative"
				:type="work.illustrations[0].type"
			/>

<!-- 			<img class="illustration-1" ref='illustration1' 
				:src="`https://drive.google.com/uc?id=${work.illustrations[0].id}`"  
				:alt="work.illustrations[0].alternative"/> -->

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
			<img class="illustration-2" :src="`https://drive.google.com/uc?id=${work.illustrations[1].id}`" 
						:alt="work.illustrations[1].alternative"/>

		</div>

	</div>
</template>

<style lang='scss' scoped>

#my-work {
	margin-top: calc(2* #{$global-padding});

	h2 {
		color: $primary-color;
		font-size:	calc(1.3 * #{$big-font-mobile});
		font-weight: 200;
	}

	.illustration-1, .illustration-2 {
		position: relative;
		margin-top: $global-padding;
		margin-left: $global-padding;
	}

	.about-my-work {
		margin-top: calc(2* #{$global-padding});
		font-size: $font-mobile;

		h3 {
			font-weight: normal;
			border-bottom: solid 1px #111111;
			font-size: 1.5em;
			padding-bottom: .4em;
		}

		.about-item {
			margin-top: .4em;
			margin-bottom: 1.5em;
		}
	}

	img {
		width: 100%;
		height: auto;
	}
}

</style>