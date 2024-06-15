import { Button } from '@/shared/ui/Button';
import { FigmaIcon } from '@/shared/ui/FigmaIcon';
import { SkillIcon } from '@/shared/ui/SkillIcon';

import cls from './PlatformInterfaceBlock.module.css';

export const PlatformInterfaceBlock = () => {
	return (
		<section className={cls['platform-interface-block']}>
			<div className={cls['caption-block']}>
				<h2>Подготовтесь к собеседованию в IT</h2>
				<p>С YeaHub подготовка к собеседованию становится простым и захватывающим процессом.</p>
			</div>

			<div className={cls['left-block']}>
				<p>
					Наша платформа предлагает обширную базу актуальных вопросов по широкому спектру тем и
					навыков, которая регулярно обновляется.
				</p>

				<div className={cls['question-interface']}>
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

					<div className={cls['question-interface__img']}></div>

					<p className={cls.answer}>
						Virtual DOM (виртуальный DOM) — это программная концепция, используемая в разработке
						веб-приложений для повышения эффективности обновлений интерфейса. Это представление
						реального DOM (структуры документа, отображаемого в браузере) в памяти, которое
						позволяет оптимизировать изменения, минимизируя взаимодействие с реальным DOM, что
						ускоряет рендеринг и обновление страниц. При изменении данных приложения Virtual DOM
						сравнивает новое состояние с предыдущим и обновляет только те части реального DOM,
						которые изменились, вместо перерисовки всего документа.
					</p>
				</div>
			</div>

			<div className={cls['right-block']}>
				<div className={cls.container}>
					<div className={cls.categories}>
						<input type="text" placeholder="Введите запрос…" disabled />

						<div>
							<p>Категории вопросов</p>

							<ul className={cls['categories-list']}>
								<li>
									<FigmaIcon />
								</li>
								<li>
									<SkillIcon />
								</li>
								<li>
									<FigmaIcon />
								</li>
								<li>
									<SkillIcon />
								</li>
							</ul>
						</div>
					</div>
					<div className={cls.filters}></div>
				</div>

				<Button btnSize="xl">Начать обучение</Button>
			</div>
		</section>
	);
};
