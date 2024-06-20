import { DislikeIcon } from '@/shared/ui/DislikeIcon';
import { LikeIcon } from '@/shared/ui/LikeIcon';
import { NextIcon } from '@/shared/ui/NextIcon';
import { PreviousIcon } from '@/shared/ui/PreviousIcon';
import { ReplayIcon } from '@/shared/ui/ReplayIcon';

import cls from './Control.module.css';

export const Control = () => {
	return (
		<div className={cls.control}>
			<PreviousIcon />
			<NextIcon />

			<ul className={cls['control-list']}>
				<li>
					<DislikeIcon />
					<span>Не знаю</span>
				</li>
				<li>
					<ReplayIcon />
					<span>Повторить</span>
				</li>
				<li>
					<LikeIcon />
					<span>Знаю</span>
				</li>
			</ul>
		</div>
	);
};
