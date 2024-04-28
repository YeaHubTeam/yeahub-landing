type listener = (this: HTMLElement, event: WheelEvent) => void;

export const wheelHandler: listener = function (event) {
	let shouldScrollLocked = true;
	const isEndOfScroll = this.scrollLeft;
	console.log(isEndOfScroll);

	let modifier = 1;
	if (event.deltaMode === event.DOM_DELTA_PIXEL) {
		modifier = 1;
	} else if (event.deltaMode === event.DOM_DELTA_LINE) {
		modifier = parseInt(getComputedStyle(this).lineHeight);
	} else if (event.deltaMode === event.DOM_DELTA_PAGE) {
		modifier = this.clientHeight;
	}

	if (
		shouldScrollLocked &&
		event.deltaY !== 0 &&
		!(this.scrollLeft + this.clientWidth >= this.scrollWidth)
	) {
		this.scrollLeft += modifier * event.deltaY;
		event.preventDefault();
	} else {
		document.body.style.overflowY = 'initial';
	}

	if (shouldScrollLocked && event.deltaY !== 0 && isEndOfScroll) {
		this.scrollLeft += modifier * event.deltaY;
		if (this.scrollLeft > 0) event.preventDefault();
		if (this.scrollLeft === 0) {
			shouldScrollLocked = false;
		}
	} else {
		document.body.style.overflowY = 'initial';
	}
};
