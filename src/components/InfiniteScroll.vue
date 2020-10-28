<script>

export default {
	name: 'InfiniteScroll',

	mounted: function () {
		this.scrollPosition();
	},

	methods: {
		scrollPosition: function () {

			let scrollBox = document.getElementById('infinit-scroll-box');
			let ul = scrollBox.querySelector('ul');
			let li = scrollBox.querySelectorAll('li');
			let contentHeight, containerHeight;
			//console.log(li[0].offsetHeight);

			let clone = ul.cloneNode(true);
			clone.classList.add('copy');
			//div.innerHTML = ul;
			scrollBox.appendChild(clone);


			scrollBox.addEventListener('scroll', () => {

				if (typeof contentHeight == 'undefined') {
					contentHeight = ul.offsetHeight;
					containerHeight = scrollBox.offsetHeight;
				}

				console.log(scrollBox.scrollTop)
				if (scrollBox.scrollTop >=  (contentHeight) ) {
					scrollBox.scrollTop = 0 + (scrollBox.scrollTop - contentHeight);
				}

			});
		},

	},

	computed: {
		windowWidth: function () {
			return this.$store.state.windowWidth;
		}
	}
}
	
</script>

<template>
	<div id='infinit-scroll-box'>
		<ul>
			<li>First element</li>
			<li>Second element</li>
			<li>Third element</li>
			<li>Fourth element</li>
		</ul>
	</div>
	
</template>

<style lang='scss' scoped>

#infinit-scroll-box {
	height: 100px;
	overflow: scroll;

	li{
		font-size: 40px;
	}

	&::-webkit-scrollbar {
    display: none;
	}
}

	
</style>