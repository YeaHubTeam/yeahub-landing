import cls from './InterviewModeBlock.module.css';

export const InterviewModeBlock = () => {
	return (
		<section className={cls['interview-mode-block']}>
			<div className={cls.interface}>
				<div className={cls['progress-bar']}>
					<div></div>
					<span>Вопрос викторины 10 из 45</span>
				</div>

				<div className={cls.question}>
					<h3>Что такое Virtual DOM, и как он работает?</h3>

					<div className={cls['img-container']}></div>

					<p>Посмотреть ответ</p>
				</div>

				<div className={cls.control}></div>
			</div>

			<div className={cls.advantages}>
				<ul className={cls['advantages-list']}>
					<li></li>
					<li></li>
				</ul>

				<p>Это идеальный способ подготовиться к реальным собеседованиям.</p>
			</div>
		</section>
	);
};
