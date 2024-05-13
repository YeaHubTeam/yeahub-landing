import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input, Icon, Button } from 'yeahub-ui-kit';

import { Authentication } from '../../model/types/authentication';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
	const [isPasswordHidden, setIsPasswordHidden] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		formState: { errors },
	} = useFormContext<Authentication>();

	const handleShowPassword = () => {
		setIsPasswordHidden((prev) => !prev);
		console.log('click');
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles['form-wrapper']}>
				<div className={styles['input-wrapper']}>
					<label className={styles.label} htmlFor="email">
						Электронная почта
					</label>
					<Input
						className={styles.input}
						{...register('email')}
						placeholder="Введите электронную почту"
					/>
					{errors.email ? <div className={styles.error}>{errors.email.message}</div> : null}
				</div>
				<div className={styles['input-wrapper']}>
					<label className={styles.label} htmlFor="password">
						Пароль
					</label>
					<Input
						className={styles.input}
						{...register('password')}
						placeholder="Введите пароль"
						type={isPasswordHidden ? 'text' : 'password'}
						suffix={
							<Icon
								className={styles.icon}
								onClick={handleShowPassword}
								icon="password"
								arg={isPasswordHidden}
								color="--palette-ui-black-300"
							/>
						}
					/>
					{errors.password ? <div className={styles.error}>{errors.password.message}</div> : null}
					<div className={styles.link}>
						<Button
							tagName="a"
							theme="link"
							value={'Забыли пароль?'}
							onClick={() => navigate('/')}
						/>
					</div>
				</div>
			</div>
			<Button theme="primary" value={'Вход'} className={styles['submit-button']} />
		</div>
	);
};
