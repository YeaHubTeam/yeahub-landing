import ScreenImg from '@/shared/assets/images/screen.png';
import { mockTraining } from '@/shared/const/mockTraining';

import cls from './QuestionList.module.css';

export const QuestionList = () => {
	return (
		<ul className={cls['question-list']}>
			{mockTraining.map((training, index) => (
				<li className={cls['question-item']} key={index}>
					<img src={ScreenImg} alt="question" />
					<p>{training.title}</p>
					<div>
						<p className={cls.raiting}>
							Рейтинг:
							<span>{training.raiting}</span>
						</p>
						<p className={cls.difficulty}>
							Cложность:
							<span>{training.difficulty}</span>
						</p>
					</div>
				</li>
			))}
		</ul>
	);
};
