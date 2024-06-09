import events from '@/shared/assets/images/eventsImg.png';
import eventsChecked from '@/shared/assets/images/eventsImgChecked.png';
import interviewImg from '@/shared/assets/images/interviewImg.png';
import { Button } from '@/shared/ui/Button';

import cls from './InterviewBlock.module.css';


export const InterviewBlock = () => {
	return (
		<section className={cls['interview-block']}>
			<div className={cls.container}>
				<div className={cls['left-block']}>
					<span>Топ вопросов</span>
					<h2 className={cls.article}>
						YEAHUB <br />
						помогает расти <br /> и достигать целей
					</h2>
					<p>
						Развивайте и улучшайте свои навыки на одной платформе: изучайте новое, готовьтесь к
						собеседованиям, погружайтесь в нюансы или обновляйте знания - YeaHub поможет справиться
						с любой задачей
					</p>
					<Button btnSize="xl">Присоединиться</Button>
				</div>
				<div className={cls['right-block']}>
					<img className={cls.wallpaper} src={interviewImg} alt="wallpaper" />
				</div>
			</div>
			<div className={cls.advantages}>
				<ul>
					<li>
						<img src={events} alt="wallpaper" />
						<p>Место, где непрерывно учатся и повышают свой профессиональный уровень</p>
					</li>
					<li>
						<img src={eventsChecked} alt="wallpaper" />
						<p>Становятся частью сообщества, с которым легче достигать самых амбициозных целей</p>
					</li>
					<li>
						<img src={events} alt="wallpaper" />
						<p>Получают поддержку, делятся опытом и обсуждают всё, что интересует</p>
					</li>
				</ul>
			</div>
		</section>
	);
};
