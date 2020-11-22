<script>
import { mapState } from 'vuex';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'WorkPage',
	data() {
		return {
		}
	},
	mounted () {
		ScrollTrigger.create({
			trigger:'.about-list',
			start:'top top+=24px',
			endTrigger: "about-my-work",
			end: "bottom bottom",
			pin: true,
			scrub: 1,
		});
	},
	methods: {
	},
	computed:  {
		...mapState(['works']),
		work: function() {
			return this.works[this.$route.params.id];
		}
	},
}
</script>

<template>
	<div id="my-work" v-if="work">

		<h2> {{ work.title }} </h2>

		<div class="container">

			<div class="illustration-section">
				<img class="illustration-1" src="https://drive.google.com/uc?id=1Do8pXLqcAhhcMHCB8HHQamZXpHPTtNTr" alt=""/>
				<img class="illustration-2" src="https://drive.google.com/uc?id=1Do8pXLqcAhhcMHCB8HHQamZXpHPTtNTr" alt=""/>
			</div>

			<div class="about-my-work">
				<ul class="about-list">
					<li class="software">
						<h3>SoftWare</h3>
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

	.container {
		display: grid;
		grid-template-columns: 1fr 405px;

		.about-my-work {
			grid-column: 2;
			//height: fit-content;
			//background-color: red;

			ul {
				//background-color: blue;
			}

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