import { useNavigate } from 'react-router-dom';
import { Button } from 'yeahub-ui-kit';

import styles from './RegistrationLabel.module.css';

export const RegistrationLabel = () => {
	const navigate = useNavigate();
	const handleClickNavigation = () => {
		navigate('/registration');
	};
	return (
		<div className={styles.wrapper}>
			<p>Нет аккаунта?</p>
			<Button tagName="a" theme="link" onClick={handleClickNavigation}>
				Зарегистрироваться как специалист
			</Button>
		</div>
	);
};
