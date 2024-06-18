import { FigmaIcon } from '@/shared/ui/FigmaIcon';
import { SkillIcon } from '@/shared/ui/SkillIcon';

import cls from './CategoriesList.module.css';

export const CategoriesList = () => {
	return (
		<div className={cls.container}>
			<p className={cls.title}>Категории вопросов</p>

			<ul className={cls['categories-list']}>
				<li>
					<FigmaIcon />
					Figma
				</li>
				<li>
					<SkillIcon />
					Wireframing
				</li>
				<li>
					<SkillIcon />
					Wireframing
				</li>
				<li>
					<FigmaIcon />
					CSS
				</li>
			</ul>

			<p className={cls.more}>Посмотреть все</p>
		</div>
	);
};
