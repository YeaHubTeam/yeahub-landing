import { Button } from '@/shared/ui/Button';

import { OfferList } from '../OfferList/OfferList';
import { QuestionList } from '../QuestionList/QuestionList';

import cls from './TrainingBlock.module.css';

export const TrainingBlock = () => {
	return (
		<section className={cls['training-block']}>
			<div className={cls['left-block']}>
				<div className={cls.container}>
					<h3>Список вопросов</h3>

					<QuestionList />
				</div>
			</div>
			<div className={cls['right-block']}>
				<h2 className={cls.title}>Удобный тренажёр</h2>
				<p>Практикуйте изученные темы в нашем тренажёре.</p>

				<OfferList />

				<Button btnSize="xl">Начать обучение</Button>
			</div>
		</section>
	);
};
