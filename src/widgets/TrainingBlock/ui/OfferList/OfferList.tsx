import { UpIcon } from '@/shared/ui/TechnologyIcon';
import { TechnologyIcon } from '@/shared/ui/UpIcon';

import cls from './OfferList.module.css';

export const OfferList = () => {
	return (
		<ul className={cls['offer-list']}>
			<li>
				<UpIcon />
				Наш тренажёр предоставляет уникальный шанс углубить свои знания и поднять их на новый
				уровень
			</li>
			<li>
				<TechnologyIcon />
				Изучение технологий ещё никогда не было таким доступным и эффективным
			</li>
		</ul>
	);
};
