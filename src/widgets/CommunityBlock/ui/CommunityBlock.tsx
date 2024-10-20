import { fakeUsers } from '@/shared/const/mockUsers';
import { Button } from '@/shared/ui/Button';
import { UserCard } from '@/shared/ui/UserCard';

import cls from './CommunityBlock.module.css';

export const CommunityBlock = () => {
	const firstBlock = fakeUsers.slice(0, 3);
	const secondBlock = fakeUsers.slice(3, 6);
	const thirdBlock = fakeUsers.slice(6, 7);

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
				<Button btnSize="xl">Присоединиться</Button>
			</div>
			<div className={cls['users-container']}>
				<div className={cls['users-first-block']}>
					{firstBlock.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
				<div className={cls['users-second-block']}>
					{secondBlock.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
				<div className={cls['users-third-block']}>
					{thirdBlock.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			</div>
		</section>
	);
};
