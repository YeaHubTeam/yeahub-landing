import { Button } from 'yeahub-ui-kit';

import LogoutIcon from '@/shared/assets/icons/logout-icon.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

import { authActions, useLazyLogoutQuery } from '@/entities/authentication';

import styles from './Logout.module.css';

export const Logout = () => {
	const dispatch = useAppDispatch();
	const [trigger] = useLazyLogoutQuery();
	const onLogout = () => {
		trigger();
		dispatch(authActions.logOut());
	};
	return (
		<div className={styles['button-wrapper']}>
			<LogoutIcon className={styles.icon} />
			<Button tagName="a" theme="link" className={styles.button} onClick={onLogout}>
				Выйти
			</Button>
		</div>
	);
};
