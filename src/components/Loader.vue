<script>
import loader from '@/utils/loader';
import WorkPage from '@/views/desktopViews/WorkPage';
import { mapState } from 'vuex';


export default {
	name: 'Loader',
	components: {
		WorkPage,
	},
	data() {
		return {
		}
	},
	mounted () {
		//loader();
	},
	methods: {
		handlerLoaded() {
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
		<slot></slot>
		<div class="preload" v-show="false" >
			<WorkPage v-for="project in projects" :id="project.key" :key="project.key"/>
		</div>
	</div>
	
</template>

<style lang="scss">	
</style>