import events from '@/shared/assets/images/eventsImg.png';
import eventsChecked from '@/shared/assets/images/eventsImgChecked.png';

import cls from './AdvantagesList.module.css';

export const AdvantagesList = () => {
	return (
		<div className={cls.advantages}>
			<ul className={cls['advantages-list']}>
				<li>
					<img src={events} alt="Большая база вопросов" />
					<h3>Большая база вопросов</h3>
					<p>Изучай технологии по актуальным теоритеческим вопросам</p>
				</li>
				<li>
					<img src={eventsChecked} alt="Прогресс обучения" />
					<h3>Прогресс обучения</h3>
					<p>Смотрите аналитику по пройденным темам, повторяйте изученные</p>
				</li>
				<li>
					<img src={events} alt="Удобный тренажёр" />
					<h3>Удобный тренажёр</h3>
					<p>Улучшайте свои навыки в нашем тренажёре по запоминанию вопросов</p>
				</li>
			</ul>
		</div>
	);
};
