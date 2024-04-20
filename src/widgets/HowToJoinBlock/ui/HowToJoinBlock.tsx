import step1Img from 'public/assets/HowToJoinBlock/step1.png';
import step2Img from 'public/assets/HowToJoinBlock/step2.png';

import { ArrowIcon } from '@/shared/ArrowIcon';
import { classNames as cn } from '@/shared/libs/classNames/classNames';

import cls from './HowToJoinBlock.module.css';

export const HowToJoinBlock = () => {
	return (
		<section className={cls['how-to-join-block']}>
			<div className={cls.info}>
				<h2 className={cls.title}>Как стать частью сообщества</h2>
				<p className={cls.text}>
					Мы в YeaHub верим, что взаимная поддержка и обмен знаниями — ключ к успеху в быстро
					меняющемся мире IT. Присоединяйтесь к нам, подтвердите свои навыки и начните влиять на
					будущее IT уже сегодня.
				</p>
			</div>
			<div className={cn(cls.step, {}, [cls['first-step']])}>
				<div className={cls['arrow-container']}>
					<ArrowIcon color="#FFDA85" />
				</div>
				<img src={step1Img} alt="step" />
				<p>
					Заполните ваш профиль, следуя нашим пошаговым подсказкам и гайдам. Создайте презентацию
					своих навыков, которая действительно выделяется.
				</p>
			</div>
			<div className={cls.step}>
				<ArrowIcon color="#6A0BFF" />
				<img src={step2Img} alt="step" />
				<p>
					Пройдите проверку ваших профессиональных навыков и знаний. Наш бесплатный процесс оценки
					включает различные этапы — от теоретических знаний до практического тестирования.
				</p>
			</div>
		</section>
	);
};

HowToJoinBlock.displayName = 'PhilosophyBlock';
