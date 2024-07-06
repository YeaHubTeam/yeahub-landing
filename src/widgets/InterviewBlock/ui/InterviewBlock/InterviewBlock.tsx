import interviewImg from '@/shared/assets/images/interviewImg.png';
import interviewImgMobile from '@/shared/assets/images/interviewImgMobile.png';
import interviewImgTablet from '@/shared/assets/images/interviewImgTablet.png';
import { useResize } from '@/shared/hooks/useResize/useResize';
import { Button } from '@/shared/ui/Button';

import { AdvantagesList } from '../AdvantagesList/AdvantagesList';
import { Progress } from '../Progress/Progress';
import { Skills } from '../Skills/Skills';

import cls from './InterviewBlock.module.css';

export const InterviewBlock = () => {
	const size = useResize();
	const isMobile = size < 768;

	return (
		<section className={cls['interview-block']}>
			<div className={cls.container}>
				<div className={cls['left-block']}>
					<span>Топ вопросов</span>
					<h2 className={cls.article}>
						<span className={cls.enter}>YEAHUB</span> помогает расти <br /> и достигать целей
					</h2>
					<p>
						Развивайте и улучшайте свои навыки на одной платформе: изучайте новое, готовьтесь к
						собеседованиям, погружайтесь в нюансы или обновляйте знания - YeaHub поможет справиться
						с любой задачей
					</p>
					<Button btnSize={isMobile ? 'l' : 'xl'}>Присоединиться</Button>
				</div>
				<div className={cls['right-block']}>
					<Skills />

					<picture>
						<source media="(max-width: 767px)" srcSet={interviewImgMobile} />
						<source media="(max-width: 1439px)" srcSet={interviewImgTablet} />
						<img className={cls.wallpaper} src={interviewImg} alt="wallpaper" />
					</picture>

					<Progress />
				</div>
			</div>

			<AdvantagesList />
		</section>
	);
};
