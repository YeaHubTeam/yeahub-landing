import { PencilIcon } from '@/shared/ui/PencilIcon';

import { Buttons } from '../Buttons/Buttons';

import cls from './QuestionInterface.module.css';

export const QuestionInterface = () => {
	return (
		<div className={cls['question-interface']}>
			<div className={cls.caption}>
				<PencilIcon />
				<p>
					Наша платформа предлагает обширную базу актуальных вопросов по широкому спектру тем и
					навыков, которая регулярно обновляется.
				</p>
			</div>

			<div className={cls.container}>
				<Buttons />

				<h3>Что такое Virtual DOM, и как он работает?</h3>
				<div>
					<p className={cls.raiting}>
						Рейтинг:
						<span>4</span>
					</p>
					<p className={cls.difficulty}>
						Cложность:
						<span>10</span>
					</p>
				</div>

				<div className={cls['img-container']}></div>

				<p className={cls.answer}>
					Virtual DOM (виртуальный DOM) — это программная концепция, используемая в разработке
					веб-приложений для повышения эффективности обновлений интерфейса. Это представление
					реального DOM (структуры документа,
				</p>
			</div>
		</div>
	);
};
