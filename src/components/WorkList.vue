<script>
import { mapState } from 'vuex';

export default {
	name: 'WorkList',
	data () {
		return {
			loaded: false,
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
					<span class='italic-text'> {{ project.value.title }} </span> - {{ project.value.type }} 
				</router-link>
			</li>
		</ul>
</template>

<style lang="scss" scoped>

.infinit-scroll-single-list {

	li{
		padding-bottom: 0.8vw;

		a, a span{
			color: black;
			transition: all .2s ease;

			
			&:hover, &:hover span{
				color: $second-color;
			}
		}
	}

	&::-webkit-scrollbar {
    display: none;
	}
}
	
</style>