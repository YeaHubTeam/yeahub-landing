import { RefObject, useEffect, useState } from 'react';

export const useObserver = <T extends HTMLElement>(ref: RefObject<T>) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const options: IntersectionObserverInit = {
			root: null,
			rootMargin: '0px',
			threshold: 0.9,
		};

		const callback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);
		const currentRef = ref.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [ref]);

	return isVisible;
};

useObserver.displayName = 'useObserver';
