import { KnowledgebaseIcon } from '@/shared/ui/KnowledgebaseIcon';
import { ProgressIcon } from '@/shared/ui/ProgressIcon';
import { TrainingIcon } from '@/shared/ui/TrainingIcon';

import cls from './AdvantagesList.module.css';

export const AdvantagesList = () => {
	return (
		<div className={cls.advantages}>
			<ul className={cls['advantages-list']}>
				<li>
					<KnowledgebaseIcon />
					<h3>Большая база вопросов</h3>
					<p>Изучай технологии по актуальным теоритеческим вопросам</p>
				</li>
				<li>
					<ProgressIcon />
					<h3>Прогресс обучения</h3>
					<p>Смотрите аналитику по пройденным темам, повторяйте изученные</p>
				</li>
				<li>
					<TrainingIcon />
					<h3>Удобный тренажёр</h3>
					<p>Улучшайте свои навыки в нашем тренажёре по запоминанию вопросов</p>
				</li>
			</ul>
		</div>
	);
};
