import { useNavigate } from 'react-router-dom';
import { Button } from 'yeahub-ui-kit';

import styles from './RegistrationLabel.module.css';

export const RegistrationLabel = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.wrapper}>
			<p>Нет аккаунта?</p>
			<Button
				tagName="a"
				theme="link"
				value={'Зарегистрироваться как специалист'}
				onClick={() => navigate('/registration')}
			/>
		</div>
	);
};