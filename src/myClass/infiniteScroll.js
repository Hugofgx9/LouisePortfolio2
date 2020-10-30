export default class infiniteScroll {
	constructor(container, content) {

		this.container = document.querySelector(container);
		this.content = this.container.querySelector(content);

		setTimeout( function() {this.init()}.bind(this), 10);
	}

	init() {

		//clone
		this.cloneElement(this.container, this.content);

		//get height
		this.containerHeight = this.container.offsetHeight;
		this.contentHeight = this.content.offsetHeight;

		this.numberOfItem = this.content.childElementCount;

		this.container.scrollTop = this.contentHeight;

		console.log(this.contentHeight);

		this.onScroll();

	}

	onScroll() {
		this.container.addEventListener('scroll', () => {
			this.scrollTop = this.container.scrollTop;
			if ( this.scrollTop >=  (this.contentHeight + this.contentHeight/ this.numberOfItem)) {
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
		container.append(this.clone);

		this.clone = el.cloneNode(true);
		this.clone.classList.add('infinite-copy');
		container.append(this.clone);

	}
}
