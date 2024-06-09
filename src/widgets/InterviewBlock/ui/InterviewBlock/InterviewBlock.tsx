import interviewImg from '@/shared/assets/images/interviewImg.png';
import { Button } from '@/shared/ui/Button';

import { AdvantagesList } from '../AdvantagesList/AdvantagesList';
import { Progress } from '../Progress/Progress';
import { Skills } from '../Skills/Skills';

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
					<Skills />
					<img className={cls.wallpaper} src={interviewImg} alt="wallpaper" />
					<Progress />
				</div>
			</div>

			<AdvantagesList />
		</section>
	);
};
