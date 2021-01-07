const loader = () => {
	document.onreadystatechange = () => {
		if (document.readyState == "complete") {
			console.log('Page completed with image and files!')
			// fetch to next page or some code
		}
	}
}

export default loader;
