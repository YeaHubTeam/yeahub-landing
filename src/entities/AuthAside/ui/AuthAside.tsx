import { AppLogo } from '@/shared/ui/AppLogo';

import styles from './AuthAside.module.css';

export const AuthAside = () => {
	return (
		<aside className={styles.wrapper}>
			<div className={styles['logo-wrapper']}>
				<AppLogo />
				<p className={styles['logo-text']}>YeaHub объединяет IT-специалистов</p>
			</div>
			<div>
				<h4 className={styles.title}>Стань частью сообщества YeaHub и получи:</h4>
				<ul className={styles['benefit-wrapper']}>
					<li className={styles['benefit-item']}>Пошаговый план обучения</li>
					<li className={styles['benefit-item']}>Карьерный рост</li>
					<li className={styles['benefit-item']}>Большое сообщество специалистов</li>
					<li className={styles['benefit-item']}>Обучение с ментором</li>
					<li className={styles['benefit-item']}>Возможность прохождения стажировки</li>
				</ul>
			</div>
		</aside>
	);
};
