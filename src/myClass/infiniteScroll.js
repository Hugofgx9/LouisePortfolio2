export default class infiniteScroll {
	constructor(container, content) {

		this.container = document.querySelector(container);
		this.content = this.container.querySelector(content);

		this.init();
		this.onScroll();
	}

	init() {

		//clone
		this.cloneElement(this.container, this.content);
		this.cloneElement(this.container, this.content);

		//get height
		this.containerHeight = this.container.offsetHeight;
		this.contentHeight = this.content.offsetHeight;

		this.numberOfItem = this.content.childElementCount;

	}

	onScroll() {

		this.container.addEventListener('scroll', () => {


			this.scrollTop = this.container.scrollTop;

			if ( this.scrollTop >=  (this.contentHeight + this.contentHeight/ this.numberOfItem)) {
				console.log('if-1');
				this.container.scrollTop =  (this.scrollTop - (this.contentHeight));
			} 
			else if ( this.scrollTop <  this.contentHeight/ this.numberOfItem) {
				this.container.scrollTop = this.scrollTop + this.contentHeight;
			}
		});
	}

	cloneElement(container, el) {

		this.clone = el.cloneNode(true);
		this.clone.classList.add('infinite-copy');
		container.appendChild(this.clone);

	}
}
