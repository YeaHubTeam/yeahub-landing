import { authAsideData } from '@/shared/const/authAsideData';
import { AppLogo } from '@/shared/ui/AppLogo';
import { AuthAsideBenefit } from '@/shared/ui/AuthAsideBenefit';

import styles from './AuthAside.module.css';

export const AuthAside = () => {
	return (
		<aside className={styles.wrapper}>
			<div className={styles['heading-wrapper']}>
				<div className={styles['logo-wrapper']}>
					<AppLogo fill="white" />
				</div>
				<p className={styles['logo-text']}>YeaHub объединяет IT-специалистов</p>
			</div>
			<div>
				<h4 className={styles.title}>
					Стань частью сообщества <br /> YeaHub и получи:
				</h4>
				<ul className={styles['benefit-wrapper']}>
					{authAsideData.map((data) => (
						<AuthAsideBenefit key={data.text} text={data.text} />
					))}
				</ul>
			</div>
		</aside>
	);
};
