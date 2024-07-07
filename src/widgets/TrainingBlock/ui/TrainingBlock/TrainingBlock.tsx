import { useResize } from '@/shared/hooks/useResize/useResize';
import { Button } from '@/shared/ui/Button';

import { OfferList } from '../OfferList/OfferList';
import { QuestionList } from '../QuestionList/QuestionList';

import cls from './TrainingBlock.module.css';

export const TrainingBlock = () => {
	const size = useResize();
	const isTablet = size < 1440;

	return (
		<section className={cls['training-block']}>
			<div className={cls['left-block']}>
				<div className={cls.container}>
					<h3>Список вопросов</h3>

					<QuestionList />
				</div>
			</div>
			<div className={cls['right-block']}>
				<div className={cls.title}>
					<h2>Удобный тренажёр</h2>
					{isTablet ? (
						<p>В YeaHub каждый найдёт новые возможности для обучения.</p>
					) : (
						<p>Практикуйте изученные темы в нашем тренажёре.</p>
					)}
				</div>

				<OfferList />

				<Button btnSize="xl">Начать обучение</Button>
			</div>
		</section>
	);
};
