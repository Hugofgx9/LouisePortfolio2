 <template>
	<div id="my-work" v-if="work">

		<div class="title-section">
			<h1 class="italic-text"> {{ work.title }} </h1>
			<p> [{{ work.type }} project] </p>

		</div>


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
				<div class="about-list">
					<ul>					
						<li class="software">
							<h2>Software</h2>
							<ul class="about-item">
								<li v-for="software in work.software" :key="software"> 
									{{ software }}
								</li>
							</ul>
						</li>
						<li class="project">
							<h2>Project</h2>
							<div class="about-item">
								<p v-html="work.description"> 
								</p>
							</div>
						</li>
					</ul>

					<DraggableLink text="Next work" :to="nextProjectLink" color='black' class="button"/>

				</div>
			</div>
		</div>
	</div>
</template>


<script>
import { mapState } from 'vuex';
import ImageOrVideo from '@/components/ImageOrVideo.vue';
import DraggableLink from '@/components/DraggableLink.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'WorkPage',
	components: {
		ImageOrVideo,
		DraggableLink
	},
	props: ['id'],
	data() {
		return {
			nextProjectLink: '/works',
		}
	},
	mounted () {
		this.createAboutScroll();
		this.nextProjectLink = `/work/${this.getNextProject()}`;

	},
	methods: {
		createAboutScroll() {
			ScrollTrigger.create({
				//markers: true,
				trigger:'.about-list',
				start:'top top+=24px',
				endTrigger: "about-my-work",
				end: "bottom bottom",
				pin: true,
				scrub: 1,
			});
		},
		getNextProject() {
			let workIndex = this.projects.findIndex( o => o.value.title == this.work.title);
			let nextProjectID;
			if( workIndex == this.projects.length - 1) {
				nextProjectID = this.projects[0].key;
			}
			else {
				nextProjectID = this.projects[workIndex + 1].key;
			}
			return nextProjectID;
		}
	},
	computed:  {
		...mapState(['works']),
		work() {
			return this.works[this.id];
		},
		projects() {
			return Object.entries(this.works).map(([key, value]) => ({key,value}));
		},
	},
}
</script>


<style lang='scss' scoped>

#my-work {
	margin-top: $global-padding;

	.title-section {
		display: flex;
		justify-content: space-between;
		margin-bottom: $global-padding;
		align-items: center;

		h1{
			font-size: $big-font-size;
			color: $primary-color;
			font-weight: normal;
		}

		p {
			vertical-align: center;
		}
	}

	.container {
		display: grid;
		grid-template-columns: 1fr 405px;
		position: relative;

		.about-my-work {
			grid-column: 2;

			h2 {
				font-weight: normal;
				border-bottom: solid 1px #111111;
				font-size: 2em;
				padding-bottom: .3em;
			}

			.about-item {
				margin-top: 18px;
				margin-bottom: 18px;
			}

			.button {
				//position: absolute;
				//bottom: 20%;
				//right: 20%;
				z-index: 10;
				margin-top: 30px;
				//position: relative;
				margin-left: -50px;	
				right: 0;
				width: 140px;
				height: 37px;
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