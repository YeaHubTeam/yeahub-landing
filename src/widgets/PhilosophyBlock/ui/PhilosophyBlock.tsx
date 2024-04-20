import { memo } from 'react';

import philosophyImg from '@/shared/assets/images/philosophyImg.png';
import { MockUsers, fakeUsers } from '@/shared/const/mockUsers';
import { Button } from '@/shared/ui/Button';
import { UserCard } from '@/shared/ui/UserCard';

import cls from './PhilosophyBlock.module.css';

const user: Array<MockUsers> = fakeUsers.slice(2, 3);

export const PhilosophyBlock = memo(() => {
	return (
		<section className={cls['philosophy-block']}>
			<h2 className={cls.article}>Наша философия</h2>
			<div className={cls.container}>
				<div className={cls['left-block']}>
					<img className={cls.wallpaper} src={philosophyImg} alt="wallpaper" />
					<UserCard className={cls.user} user={user[0]} />
					<div className={cls.verification}>
						<h3>Поздравляем, теперь тебе доступна верификация!</h3>
						<span>
							Стань верифицированным членом сообщества и получи возможность проводить мероприятия,
							создавать курсы, менторить, искать работу и многое другое.
						</span>
						<Button>Пройти верификацию</Button>
					</div>
				</div>
				<div className={cls['right-block']}>
					<h3>Сообщество специалистов</h3>
					<span>
						YeaHub — это не просто платформа, это сообщество верифицированных специалистов, которые
						прошли тщательную проверку знаний и подтвердили свои навыки. Это место, где
						профессионалы IT-индустрии общаются, обмениваются опытом и вдохновляют друг друга на
						новые достижения.
					</span>

					<hr />

					<h3>Профессиональный рост</h3>

					<span>
						Активное участие в жизни сообщества — не просто вклад в его развитие, но и возможность
						для самореализации. Если вы проводите собеседования, тестирование, оцениваете качества
						других специалистов, участвуете в опросах, пишите статьи, помогаете новичкам, то вам
						доступны все сервисы бесплатно без комиссии
					</span>
				</div>
			</div>
		</section>
	);
});

PhilosophyBlock.displayName = 'PhilosophyBlock';
