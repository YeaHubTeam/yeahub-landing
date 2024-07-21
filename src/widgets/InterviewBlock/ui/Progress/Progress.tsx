import cls from './Progress.module.css';

export const Progress = () => {
	return (
		<div className={cls.container}>
			<p>Прогресс</p>
			<span>Пройдено 3 из 3 вопрос изучен!</span>
			<ul className={cls['progress-bar']}>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
};
