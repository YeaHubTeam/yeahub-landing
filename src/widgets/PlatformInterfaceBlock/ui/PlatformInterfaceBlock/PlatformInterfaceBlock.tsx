import { Button } from '@/shared/ui/Button';
import { FigmaIcon } from '@/shared/ui/FigmaIcon';
import { FilterIcon } from '@/shared/ui/FilterIcon';
import { PencilIcon } from '@/shared/ui/PencilIcon';
import { SkillIcon } from '@/shared/ui/SkillIcon';

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
				<div className={cls['left-block']}>
					<PencilIcon />
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
					<div className={cls['content-container']}>
						<div className={cls.content}>
							<div className={cls.categories}>
								<input type="text" placeholder="Введите запрос…" disabled />

								<div>
									<p>Категории вопросов</p>

									<ul className={cls['categories-list']}>
										<li>
											<FigmaIcon />
											Figma
										</li>
										<li>
											<SkillIcon />
											Wireframing
										</li>
										<li>
											<SkillIcon />
											Wireframing
										</li>
										<li>
											<FigmaIcon />
											CSS
										</li>
									</ul>
								</div>
								<button>Посмотреть все</button>
							</div>
							<div className={cls.filters}>
								<ul className={cls['filters-list']}>
									<li>
										Уровень сложности
										<ul>
											<li>1-3</li>
											<li>4-6</li>
											<li>7-8</li>
											<li>9-10</li>
										</ul>
									</li>
									<li>
										Рейтинг
										<ul>
											<li>1</li>
											<li>2</li>
											<li>3</li>
											<li>4</li>
											<li>5</li>
										</ul>
									</li>
									<li>
										Статус
										<ul>
											<li>Изученные</li>
											<li>Не изученные</li>
											<li>Сохранённые</li>
											<li>Все</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>

						<FilterIcon />

						<p>
							Используйте удобные фильтры для поиска вопросов по интересующим вас темам и уровню
							сложности.
						</p>
					</div>
					<Button btnSize="xl">Начать обучение</Button>
				</div>
			</div>
		</section>
	);
};
