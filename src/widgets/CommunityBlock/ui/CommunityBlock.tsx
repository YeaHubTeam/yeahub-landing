import { Button } from '@/shared/ui/Button';
import { UserCard } from '@/shared/ui/UserCard';

import { fakeUsers } from '../mockUsers/mockUsers';

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
				<Button btnSize="XL">Присоединиться</Button>
			</div>
			<div className={cls.usersContainer}>
				<div className={cls.usersFirstBlock}>
					{firstBlock.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
				<div className={cls.usersSecondBlock}>
					{secondBlock.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
				<div className={cls.usersThirdBlock}>
					{thirdBlock.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			</div>
		</section>
	);
};
