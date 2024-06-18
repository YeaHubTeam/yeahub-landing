import { Button } from '@/shared/ui/Button';
import { FilterIcon } from '@/shared/ui/FilterIcon';
import { LoopIcon } from '@/shared/ui/LoopIcon';

import { CategoriesList } from '../CategoriesList/CategoriesList';
import { FiltersList } from '../FiltersList/FiltersList';

import cls from './CategoriesBlock.module.css';

export const CategoriesBlock = () => {
	return (
		<div className={cls['categories-block']}>
			<div className={cls['content-container']}>
				<div className={cls.content}>
					<div className={cls.categories}>
						<div className={cls['categories-input']}>
							<LoopIcon />
							<input placeholder="Введите запрос…" disabled />
						</div>

						<CategoriesList />
					</div>

					<FiltersList />
				</div>

				<div className={cls['caption-block']}>
					<FilterIcon />

					<p>
						Используйте удобные фильтры для поиска вопросов по интересующим вас темам и уровню
						сложности.
					</p>
				</div>
			</div>
			<Button btnSize="xl">Пройти собеседование</Button>
		</div>
	);
};
