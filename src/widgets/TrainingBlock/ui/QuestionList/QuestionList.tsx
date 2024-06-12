import ScreenImg from '@/shared/assets/images/screen.png';

import { mockTraining } from './mockTraining';
import cls from './QuestionList.module.css';

const mockQuestionList = mockTraining.slice(0, 4);

export const QuestionList = () => {
	return (
		<ul className={cls['question-list']}>
			{mockQuestionList.map((training) => (
				<li className={cls['question-item']} key={training.id}>
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
