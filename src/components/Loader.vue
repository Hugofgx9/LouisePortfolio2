<script>
import loader from '@/utils/loader';
import gsap from 'gsap';
import ColorSelect from '@/components/ColorSelect';
import WorkPage from '@/views/desktopViews/WorkPage';
import { mapState } from 'vuex';
import MqSlot from '@/components/mq-slot.vue';


export default {
	props: {
		isAppMounted: Boolean
	},

	name: 'Loader',
	components: {
		WorkPage,
		ColorSelect,
		MqSlot
	},
	data() {
		return {
			loaded: false,
			showLoader: true,
		}
	},
	mounted () {

		
		if( this.isAppMounted == false ) {
			this.load();
			this.waitingAnim();
		} else {
			this.loaded = true;
			this.showLoader = false;
		}

	},
	methods: {
		load() {
			document.onreadystatechange = () => {
				if (window.location.pathname.match(/\b(work)\b/g) ) {
					if (document.readyState == "interactive") {
						this.loaded = true;
					}
				}
				else {
					if (document.readyState == "complete") {
						this.loaded = true;
					}
				}
			}
		},

		waitingAnim() {
			let tl = gsap.timeline({
				repeat: -1,
			});
			let colorsArray = [...document.querySelectorAll('.loader-content .select-color li')]

			for(let i in colorsArray) {
				tl.to(colorsArray[i], {
					y: '+= 15',
					duration: 0.5,
					ease: 'power2.out',
				}, i * 0.2)

				tl.to(colorsArray[i], {
					y: 0,
					duration: 0.5,
					ease: 'power2.out',
				}, 0.5 + i * 0.2)
			}
			tl.add( () => {
				if (this.loaded == true) {
					tl.kill();
					this.enterWebsite();
				}
			})
		},

		enterWebsite() {
			let tl = gsap.timeline()
			let currentColors = document.querySelector('.loader .loader-content .select-color')
			let currentPos = currentColors.getBoundingClientRect();
			let newColors = document.querySelector('.app-content .select-color');
			let newPos = newColors.getBoundingClientRect();


			tl.set('.app-content .select-color', { 
				visibility: 'hidden',
			})

			tl.to(currentColors, {
				height: newPos.height,
				y: newPos.top - currentPos.top - (currentPos.height - newPos.height) / 2,
				x: newPos.left - currentPos.left,
				duration: 2,
				ease: 'power3.inOut',
			})

			tl.to('.loader .loader-content .bg', {
				opacity: 0,
				duration: 1.2,
				ease: 'power3.inOut',
			}, '<0.8')

			tl.add( () => {
				this.showLoader = false;
			})

			tl.set('.app-content .select-color', { 
				visibility: 'visible',
			})

		}
	},
	computed: {
		...mapState(['works']),
		projects() {
			return Object.entries(this.works).map(([key, value]) => ({key,value}));
		},
	}
}
</script>

<template>
	<div class="loader">
		<mq-slot mq='lg' >
			<div class="loader-content" v-if="showLoader">
				<div class="bg"></div>
				<color-select/>
			</div>
		</mq-slot>
		<div class="app-content">
			<slot></slot>
		</div>
		<div class="preload" v-show="false" v-if="!loaded" >
			<work-page v-for="project in projects" :id="project.key" :key="project.key"/>
		</div>
	</div>
	
</template>

<style lang="scss">	

.loader-content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;

	.bg	{
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		background: white;
	}
}
</style>