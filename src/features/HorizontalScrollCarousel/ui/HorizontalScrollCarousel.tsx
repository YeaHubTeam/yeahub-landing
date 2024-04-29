import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

import cls from './HorizontalScrollCarousel.module.css';

interface HorizontalScrollCarousel {
	children: React.ReactNode;
}

const HorizontalScrollCarousel = (props: HorizontalScrollCarousel) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-30%']);

	return (
		<section ref={targetRef} className={cls.contCarousel}>
			<div className={cls.carousel}>
				<motion.div style={{ x }} className={cls.inner}>
					{props.children}
				</motion.div>
			</div>
		</section>
	);
};

export default HorizontalScrollCarousel;
