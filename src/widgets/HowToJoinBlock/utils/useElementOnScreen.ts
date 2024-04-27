// import { MutableRefObject, useEffect, useRef, useState } from "react"

// type TuseElementOnScreen = (options: IntersectionObserverInit) => [MutableRefObject<null>, boolean]

// export const useElementOnScreen: TuseElementOnScreen = (options) => {
// 	const containerRef = useRef(null)
// 	const [isVisible, setIsVisible] = useState<boolean>(false)

// 	const handleVisibility: IntersectionObserverCallback = ([entry]:IntersectionObserverEntry[]) => {
// 		setIsVisible(entry.isIntersecting)
// 	}

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(handleVisibility, options)

// 		if (containerRef.current) observer.observe(containerRef.current)

// 		return () => {
// 			if (containerRef.current) observer.unobserve(containerRef.current)
// 		}
// 	}, [containerRef.current, options])

// 	return [containerRef, isVisible]
// }

// 	useEffect(() => {
// 		if (sectionRef.current) {
// 			const observer = new IntersectionObserver(([entry]) => {
// 				if (entry.isIntersecting) {
// 					let modifier: number;
// 					(sectionRef.current as unknown as HTMLElement).addEventListener('wheel', function(event) {
//     				if (event.deltaMode === event.DOM_DELTA_PIXEL) {
// 							modifier = 1
// 						} else if (event.deltaMode == event.DOM_DELTA_LINE) {
// 							modifier = parseInt(getComputedStyle(this).lineHeight);
// 						} else if (event.deltaMode === event.DOM_DELTA_PAGE) {
// 							modifier = this.clientHeight;
// 						}
// 						if (event.deltaY != 0) {
// 							this.scrollLeft += modifier * event.deltaY;
// 							event.preventDefault();
// 						}
//   				});
// 			};
// }, {threshold: 1.0});
// 			observer.observe(sectionRef.current)
// 		}
// 	}, [])
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type listener = (this: HTMLElement, event: WheelEvent) => any;

export const wheelHandler: listener = function (event) {
	let modifier = 1;
	if (event.deltaMode === event.DOM_DELTA_PIXEL) {
		modifier = 1;
	} else if (event.deltaMode == event.DOM_DELTA_LINE) {
		modifier = parseInt(getComputedStyle(this).lineHeight);
	} else if (event.deltaMode === event.DOM_DELTA_PAGE) {
		modifier = this.clientHeight;
	}
	if (event.deltaY != 0) {
		this.scrollLeft += modifier * event.deltaY;
		event.preventDefault();
	}
};
