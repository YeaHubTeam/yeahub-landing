import { Button } from '@/shared/ui/Button';

import cls from './CommunityBlock.module.css';

export const CommunityBlock = () => {
	return (
		<section className={cls.container}>
			<div className={cls.description}>
				<h2>
					Сообщество <br /> IT специалистов
				</h2>
				<p>
					YeaHub — это не просто платформа, это место, где профессионалы <br /> IT-индустрии
					общаются, обмениваются опытом и вдохновляют <br /> друг друга на новые достижения.
				</p>
				<Button btnSize="XL">Присоединиться</Button>
			</div>
		</section>
	);
};
