import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { mockSteps } from '@/shared/const/mockSteps';

import { HowToJoinStep } from '@/entities/HowToJoinStep';

import { wheelHandler } from '../utils/useElementOnScreen';

import cls from './HowToJoinBlock.module.css';

export const HowToJoinBlock = () => {
	const [ref, inView, entry] = useInView({ threshold: 1.0 });

	useEffect(() => {
		const element = entry?.target as HTMLElement;
		if (inView) {
			element.addEventListener('wheel', wheelHandler);
		}

		return () => {
			if (entry?.target) element.removeEventListener('wheel', wheelHandler);
		};
	}, [entry?.target, inView]);

	return (
		<section className={cls['how-to-join-block']} ref={ref}>
			<div className={cls.info}>
				<h2 className={cls.title}>Как стать частью сообщества</h2>
				<p className={cls.text}>
					Мы в YeaHub верим, что взаимная поддержка и обмен знаниями — ключ к успеху в быстро
					меняющемся мире IT. Присоединяйтесь к нам, подтвердите свои навыки и начните влиять на
					будущее IT уже сегодня.
				</p>
			</div>
			{mockSteps.map((data) => {
				return (
					<HowToJoinStep
						key={data.id}
						img={data.img}
						arrowColor={data.arrowColor}
						bcColor={data.bcColor}
						text={data.text}
					/>
				);
			})}
		</section>
	);
};

HowToJoinBlock.displayName = 'PhilosophyBlock';
