<script>
	import { mapState } from 'vuex';
	import gsap from 'gsap';
	import imgMenu from '@/utils/imgMenu';

	export default {
		name: 'WorkList',
		data () {
			return {
				loaded: false,
			}
		},
		mounted () {
			new imgMenu;
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
					<span class='italic-text'> {{ project.value.title }} </span><span class="type-of-work"> - {{ project.value.type }} </span>
				</router-link>
				<div class="hover-img">
					<div class="hover-img__inner">
						<img :src="`${project.value.hover_img.src}`">
					</div>
				</div>
			</li>
		</ul>
</template>

<style lang="scss" scoped>

	.infinit-scroll-single-list {

		li{
			a, a span{
				position: relative;
				z-index: 5;
				color: black;
				transition: all .2s ease;

				span.italic-text {
					display: inline-block;
					padding-bottom: 0.8vw;
				}

				span.type-of-work {
					margin-left: 100px;
					opacity: 0;
					text-transform: uppercase;
				}
				
				&:hover, &:hover span{
					color: var(--second-color);

					&.type-of-work {
						margin-left: 0;
						opacity: 1;
					}
				}
			}

			.hover-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 200px;
				height: auto;
				z-index: -1;
				opacity: 0;
				transform: translate(-50%, -50%);

				.hover-img__inner {
					overflow: hidden;


					img {
						width: 100%;
						height: auto;
						position: relative;
					}
				}
			}
		}

		&::-webkit-scrollbar {
			display: none;
		}
	}
	
</style>