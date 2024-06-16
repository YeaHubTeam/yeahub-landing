import { CategoriesBlock } from '../CategoriesBlock/CategoriesBlock';
import { QuestionInterface } from '../QuestionInterface/QuestionInterface';

import cls from './PlatformInterfaceBlock.module.css';

export const PlatformInterfaceBlock = () => {
	return (
		<section className={cls['platform-interface-block']}>
			<div className={cls['caption-block']}>
				<h2>
					Подготовтесь <br /> к собеседованию в IT
				</h2>
				<p>С YeaHub подготовка к собеседованию становится простым и захватывающим процессом.</p>
			</div>

			<div className={cls.container}>
				<QuestionInterface />

				<CategoriesBlock />
			</div>
		</section>
	);
};
