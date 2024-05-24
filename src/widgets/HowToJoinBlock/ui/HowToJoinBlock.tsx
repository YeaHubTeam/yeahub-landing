import { mockSteps } from '@/shared/const/mockSteps';

import { HorizontalScrollCarousel } from '@/features/HorizontalScrollCarousel';
import { HowToJoinStep } from '@/features/HorizontalScrollCarousel';

import cls from './HowToJoinBlock.module.css';

export const HowToJoinBlock = () => {
	return (
		<section className={cls['how-to-join-block']}>
			<HorizontalScrollCarousel>
				<div className={cls.info}>
					<h2 className={cls.title}>Как стать частью сообщества</h2>
					<p className={cls.text}>
						Мы в YeaHub верим, что взаимная поддержка и обмен знаниями — ключ к успеху в быстро
						меняющемся мире IT. Присоединяйтесь к нам, подтвердите свои навыки и начните влиять на
						будущее IT уже сегодня.
					</p>
				</div>
				{mockSteps.map((step) => {
					return <HowToJoinStep key={step.id} {...step} />;
				})}
			</HorizontalScrollCarousel>
		</section>
	);
};

HowToJoinBlock.displayName = 'PhilosophyBlock';
