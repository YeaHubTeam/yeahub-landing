/* eslint-disable jsx-a11y/anchor-is-valid */
import profileImg from 'public/assets/GoalSection/img/profile_img.png';

import { Button } from '@/shared/ui/Button';

import cls from './GoalBlock.module.css';

export const GoalBlock = () => {
	return (
		<section className={cls['goal-block']}>
			<h2 className={cls.title}>
				YeaHub помогает расти <br /> и достигать целей
			</h2>
			<div className={cls.wrapper}>
				<div className={cls['left-block']}>
					<div className={cls.verification}>
						<h3 className={cls['verification-title']}>Верификация</h3>
						<p className={cls['verification-info']}>
							Пройди верификацию чтобы доказать свою компетентность, и в дальнейшем проводить свои
							мероприятия, менторить и ещё много чего ещё
						</p>
						<Button btnSize="xl" className={cls['verification-btn']}>
							Пройти верификацию
						</Button>
						<a href="#" className={cls['verification-link']}>
							Для чего нужна верификация?
						</a>
					</div>
					<p className={cls['verification-guide']}>
						Создайте свой профиль в котором будет отображаться вся ваша активность в жизни IT
						сообщества, уровень ваших навыков, написанные статьи, количество проведённых
						собеседований, посещённых конференций и митапов.
					</p>
				</div>
				<div className={cls['img-wrapper']}>
					<img src={profileImg} alt="Profile" />
				</div>
				<div className={cls['right-block']}>
					<p>
						Это ваше лицо в сообществе YeaHub, видимое для других специалистов и работодателей. Это
						помогает продвигаться в карьере и показывает вашу активность в IT сообществе
					</p>
					<div className={cls.sticker}>
						<h4 className={cls['sticker-title']}>Просто красавчик!</h4>
						<p className={cls['sticker-info']}>
							За участие и / или организацию 10 и более мероприятий
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
