import { LevelIcon } from '@/shared/ui/LevelIcon';
import { ProgressProfileIcon } from '@/shared/ui/ProgressProfileIcon';

import { Statistics } from '../Statistics/Statistics';

import cls from './ProgressBlock.module.css';

export const ProgressBlock = () => {
	return (
		<section className={cls['progress-block']}>
			<div className={cls['left-block']}>
				<div className={cls.caption}>
					<h2>отслеживайте свой прогресс</h2>
					<p>
						YeaHub предоставляет продвинутые инструменты
						<span>для мониторинга вашего обучения.</span>
					</p>
				</div>

				<ul className={cls['progress-list']}>
					<li>
						<ProgressProfileIcon />В вашем личном профиле доступна детализированная статистика,
						включая количество пройденных вопросов и тем.
					</li>
					<li>
						<LevelIcon />
						Определите свой текущий уровень и выявите пробелы в знаниях для более целенаправленного
						обучения или подготовки к поиску работы.
					</li>
				</ul>
			</div>

			<div className={cls['right-block']}>
				<Statistics />
			</div>
		</section>
	);
};
