import { FigmaIcon } from '@/shared/ui/FigmaIcon';
import { SkillIcon } from '@/shared/ui/SkillIcon';

import cls from './Skills.module.css';

export const Skills = () => {
	return (
		<div className={cls.container}>
			<div className={cls['top-block']}>
				<div className={cls['icon-container']}>
					<FigmaIcon />
				</div>
				<div className={cls['icon-container']}>
					<SkillIcon />
				</div>
			</div>
			<div className={cls['bottom-block']}>
				<div className={cls['icon-container']}>
					<SkillIcon />
				</div>
				<div className={cls['icon-container']}>
					<FigmaIcon />
				</div>
			</div>
		</div>
	);
};
