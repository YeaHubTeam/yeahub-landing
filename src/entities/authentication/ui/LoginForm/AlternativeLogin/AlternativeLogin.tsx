import GitHubIcon from '@/shared/assets/icons/github.svg';

import styles from './AlternativeLogin.module.css';

export const AlternativeLogin = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>Авторизоваться через социальные сети</p>
			<div className={styles['icons-wrapper']}>
				<GitHubIcon className={styles.icon} />
				<GitHubIcon className={styles.icon} />
				<GitHubIcon className={styles.icon} />
			</div>
		</div>
	);
};
