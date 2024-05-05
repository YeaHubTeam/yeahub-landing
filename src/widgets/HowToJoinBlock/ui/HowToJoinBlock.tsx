import { mockSteps } from '@/shared/const/mockSteps';

import { HowToJoinStep } from '@/entities/HowToJoinStep';

import { HorizontalScrollCarousel } from '@/features/HorizontalScrollCarousel';

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
				{mockSteps.map((data) => {
					return (
						<HowToJoinStep
							key={data.id}
							img={data.img}
							arrowColor={data.arrowColor}
							bgColor={data.bcColor}
							text={data.text}
						/>
					);
				})}
			</HorizontalScrollCarousel>
		</section>
	);
};

HowToJoinBlock.displayName = 'PhilosophyBlock';
