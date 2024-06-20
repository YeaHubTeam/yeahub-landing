import { Advantages } from '../Advantages/Advantages';
import { Control } from '../Control/Control';

import cls from './InterviewModeBlock.module.css';

export const InterviewModeBlock = () => {
	return (
		<section className={cls['interview-mode-block']}>
			<div className={cls.interface}>
				<div className={cls['progress-bar']}>
					<div></div>
					<span>Вопрос викторины 10 из 45</span>
				</div>
				<div className={cls.question}>
					<h3>Что такое Virtual DOM, и как он работает?</h3>

					<div className={cls['img-container']}></div>

					<p>Посмотреть ответ</p>
				</div>

				<Control />
			</div>

			<Advantages />
		</section>
	);
};
