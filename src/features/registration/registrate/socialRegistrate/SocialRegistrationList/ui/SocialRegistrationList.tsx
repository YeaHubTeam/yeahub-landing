import GitHubIcon from '@/shared/assets/icons/github.svg';

import styles from './SocialRegistrationList.module.css';

export const SocialRegistrationList = () => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>Зарегистрироваться через социальные сети</p>
			<div className={styles['icons-wrapper']}>
				<GitHubIcon className={styles.icon} />
				<GitHubIcon className={styles.icon} />
				<GitHubIcon className={styles.icon} />
			</div>
		</div>
	);
};
