import { DecorationItem } from '@/shared/ui/DecorationItem';
import { StudentIcon } from '@/shared/ui/StudentIcon';
import { TrainingIcon } from '@/shared/ui/TrainingIcon';

import cls from './Advantages.module.css';

export const Advantages = () => {
	return (
		<div className={cls.advantages}>
			<ul className={cls['advantages-list']}>
				<li>
					<StudentIcon />
					Практикуйте изученные темы в режиме собеседований.
				</li>
				<li>
					<TrainingIcon />
					Воспользуйтесь удобными карточками для запоминания и возможностью сохранения материала для
					последующего повторения.
				</li>
			</ul>

			<div className={cls.decoration}>
				<DecorationItem />
				<DecorationItem />
			</div>

			<p>Это идеальный способ подготовиться к реальным собеседованиям.</p>
		</div>
	);
};
