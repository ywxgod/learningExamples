export class DomUtil {

	static isHidden(elem) {
		return !elem.offsetWidth && !elem.offsetHeight;
	}

	static getCoords(elem) {
		let box = elem.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset,
			width: box.width,
			height: box.height
		};
	}



}
