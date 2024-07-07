import { useResize } from '@/shared/hooks/useResize/useResize';
import { FigmaIcon } from '@/shared/ui/FigmaIcon';
import { SkillIcon } from '@/shared/ui/SkillIcon';

import cls from './CategoriesList.module.css';

export const CategoriesList = () => {
	const size = useResize();
	const isTablet = size < 1440 && size >= 768;

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
				<li className={cls.css}>
					<FigmaIcon />
					CSS
				</li>
				{isTablet ? (
					<li>
						<FigmaIcon />
						Figma
					</li>
				) : (
					''
				)}
			</ul>

			<p className={cls.more}>Посмотреть все</p>
		</div>
	);
};
