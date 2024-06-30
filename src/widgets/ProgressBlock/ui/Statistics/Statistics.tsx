import { classNames } from '@/shared/libs/utils/classNames/classNames';

import cls from './Statistics.module.css';

export const Statistics = () => {
	return (
		<div className={cls.statistics}>
			<h3>Статистика собеседований</h3>

			<div className={classNames(cls['statistics-pie'], {}, [cls['progress-75'], cls['style-2']])}>
				<div className={cls.pie}>
					<p className={cls.label}>
						75%<span>пройдено</span>
					</p>
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
