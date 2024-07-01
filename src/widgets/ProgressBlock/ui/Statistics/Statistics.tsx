import Progress from '@/shared/assets/icons/progress.svg';

import cls from './Statistics.module.css';

export const Statistics = () => {
	return (
		<div className={cls.statistics}>
			<h3>Статистика собеседований</h3>

			<div className={cls['statistics-pie']}>
				<div className={cls.pie}>
					<p className={cls.label}>
						60%<span>пройдено</span>
					</p>

					<Progress className={cls['progress-icon']} />
				</div>
			</div>

			<ul className={cls['statistics-list']}>
				<li>
					Всего вопросов
					<span>120</span>
				</li>
				<li>
					Не изучено
					<span>50</span>
				</li>
				<li>
					Изучено
					<span>20</span>
				</li>
			</ul>
		</div>
	);
};
