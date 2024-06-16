import cls from './FiltersList.module.css';

export const FiltersList = () => {
	return (
		<div className={cls.filters}>
			<ul className={cls['filters-list']}>
				<li>
					Уровень сложности
					<ul className={cls['sub-list']}>
						<li>1-3</li>
						<li>4-6</li>
						<li>7-8</li>
						<li className={cls.active}>9-10</li>
					</ul>
				</li>
				<li>
					Рейтинг
					<ul className={cls['sub-list']}>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li className={cls.active}>4</li>
						<li>5</li>
					</ul>
				</li>
				<li>
					Статус
					<ul className={cls['sub-list']}>
						<li>Изученные</li>
						<li>Не изученные</li>
						<li>Сохранённые</li>
						<li className={cls.active}>Все</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};
