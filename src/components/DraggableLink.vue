<template>
	<OvalLink :active="false" :text="text" :to="to" :color="color" ref="draggableButton" class="drag-link"/>
</template>

<script>
import OvalLink from '@/components/OvalLink.vue';
import { getTranslateValues } from '@/utils/getTranslateValues';
import { gsap, Power1 } from "gsap";
import draggable from '@/utils/draggable';

export default {
	name: 'DraggableLink',
	props: {
		text: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: 'white',
		}
	},
	components: {
		OvalLink,
	},
	data() {
		return {
			btn: null,
		};
	},
	mounted() {
		let el = this.$refs.draggableButton.$el;
		this.btn = new draggable(el, this.to, this);
	},
	watch: {
		//necessary if to is set dynamicaly in parent component
		to(val) {
			this.btn.updateLink(val);
		},
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>

.drag-link {
	cursor: move;
}
</style>
