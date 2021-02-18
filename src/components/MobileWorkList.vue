<script>
	import { mapState } from 'vuex';
	import gsap from 'gsap';

	export default {
		name: 'MobileWorkList',
		data () {
			return {
			}
		},
		mounted () {
		},
		methods: {
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
		<ul class="infinit-scroll-single-list">
			<li v-for="project in projects" :key="project.key">
				<router-link :to="`work/${project.key}`">
					<span class='italic-text'> {{ project.value.title }} </span>
					<span class="domain-of-work"> - {{ project.value.domain }} </span>
				</router-link>
			</li>
		</ul>
</template>

<style lang="scss" scoped>

	.infinit-scroll-single-list {

		li{
			a, a span{
				position: relative;
				color: black;
				transition: all .2s ease;

				span.italic-text {
					display: inline-block;
					padding-bottom: 0.8vw;
				}

				span.domain-of-work {
					text-transform: uppercase;
				}
				
				&:hover, &:hover span{
					color: var(--second-color);
				}
			}
		}
	}
	
</style>