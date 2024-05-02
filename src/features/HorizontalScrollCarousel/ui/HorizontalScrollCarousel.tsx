import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

import cls from './HorizontalScrollCarousel.module.css';

interface HorizontalScrollCarousel {
	children: React.ReactNode;
}

export const HorizontalScrollCarousel = (props: HorizontalScrollCarousel) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

	return (
		<div ref={targetRef} className={cls.wrapper}>
			<div className={cls.carousel}>
				<motion.div style={{ x }} className={cls.inner}>
					{props.children}
				</motion.div>
			</div>
		</div>
	);
};
