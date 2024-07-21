import firstImg from 'public/assets/checkSystem/img/first.jpg';
import fourthImg from 'public/assets/checkSystem/img/fourth.jpg';
import secondImg from 'public/assets/checkSystem/img/second.jpg';
import thirdImg from 'public/assets/checkSystem/img/third.jpg';

import { classNames } from '@/shared/libs/utils/classNames/classNames';

import cls from './CheckSystemBlock.module.css';
export const CheckSystemBlock = () => {
	return (
		<section className={cls['check-system']}>
			<h2 className={cls['head-title']}>Наша система проверки</h2>
			<div className={classNames(cls.wrapper, {}, [cls['space-between']])}>
				<div className={classNames(cls.wrapper, {}, [cls['column']])}>
					<div className={classNames(cls.wrapper, {}, [cls['bottom-83']])}>
						<div className={classNames(cls['img-wrapper'], {}, [cls['top-30'], cls['right-16']])}>
							<img src={firstImg} alt="avatar" />
						</div>
						<p className={classNames(cls['feature-text'], {}, [cls['first-step-bg-color']])}>
							<span className={cls['feature-data']}>90%</span> <br /> дизайнеров <br /> теперь с
							нами
						</p>
					</div>
					<h3 className={cls.title}>YeaHub объединяет IT-специалистов</h3>
				</div>
				<div className={classNames(cls.wrapper, {}, [cls['column']])}>
					<div className={classNames(cls.wrapper, {}, [cls['bottom-40']])}>
						<div className={classNames(cls['img-wrapper'], {}, [cls['top-30'], cls['right-16']])}>
							<img src={secondImg} alt="avatar" />
						</div>
						<div className={classNames(cls['img-wrapper'], {}, [cls['top-60']])}>
							<img src={thirdImg} alt="avatar" />
						</div>
					</div>
					<p className={cls['feature-description']}>
						Стань частью сообщества, пройти проверку знаний. Этот процесс гарантирует, что каждый
						член YeaHub является компетентным специалистом, чьи навыки и знания были подтверждены.
					</p>
				</div>
				<div className={classNames(cls.wrapper, {}, [cls['column']])}>
					<div className={classNames(cls.wrapper, {}, [cls['bottom-83']])}>
						<p
							className={classNames(cls['feature-text'], {}, [
								cls['second-step-bg-color'],
								cls['right-16'],
							])}
						>
							<span className={cls['feature-data']}>80%</span> <br /> разработчиков <br /> теперь с
							нами
						</p>
						<div className={classNames(cls['img-wrapper'], {}, [cls['top-60']])}>
							<img src={fourthImg} alt="avatar" />
						</div>
					</div>
					<p className={cls['feature-description']}>
						В основном это несколько этапов-собеседований с другими специалистами для проверки
						определённых навыков и качеств. После каждого этапа верификации вы получите обратную
						связь и оценку ваших знаний
					</p>
				</div>
			</div>
		</section>
	);
};
