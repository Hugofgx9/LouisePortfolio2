<script>
import { mapState } from 'vuex';
import DraggableLink from '@/components/DraggableLink.vue';
import ImageOrVideo from '@/components/ImageOrVideo.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'MobileWorkPage',
	components: {
		ImageOrVideo,
		DraggableLink,
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
		},
		nextProject() {
			let projects = Object.entries(this.works).map(([key, value]) => ({key,value}));
			let workIndex = projects.findIndex( o => o.value.title == this.work.title);
			let nextProjectID;
			if( workIndex == projects.length - 1) {
				nextProjectID = projects[0].key;
			}
			else {
				nextProjectID = projects[workIndex + 1].key;
			}
			return `/work/${nextProjectID}`;
		}
	},
}
</script>

<template>
	<div id="my-work" v-if="work">


		<h2 class="italic-text"> {{ work.title }} </h2>

		<div class="container">

			<ImageOrVideo 
				ref='illustration1' 
				class="illustration-1" 
				:src="work.illustrations[0].id"  
				:alt="work.illustrations[0].alternative"
				:type="work.illustrations[0].type"
			/>

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

			<ImageOrVideo 
				class="illustration-2" 
				ref='illustration2' 
				:src="work.illustrations[1].id"  
				:alt="work.illustrations[1].alternative"
				:type="work.illustrations[1].type"
			/>
		</div>

		<div class="button-container">
			<DraggableLink text="Next work" :to="nextProject" color='black' class="button"/>
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
		margin-right: -$global-padding;
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

	.button-container{
		display: grid;

		.button{
		margin-top: calc(#{$global-padding});
		justify-self: end;
		position: relative;
		margin-right: -5vw;
		right: 0;
		height: 9vw;
		width: 34vw;
		z-index: 10;

			@media only screen and (max-width: 510px) {
				height: 45px;
				width: 160px;
			}
		}
	}
}


</style>