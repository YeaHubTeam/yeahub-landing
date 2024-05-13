import { useNavigate } from 'react-router-dom';
import { Button } from 'yeahub-ui-kit';

import styles from './LoginLabel.module.css';

export const LoginLabel = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.wrapper}>
			<p>Уже есть аккаунт?</p>
			<Button tagName="a" theme="link" value={'Войти'} onClick={() => navigate('/registration')} />
		</div>
	);
};
