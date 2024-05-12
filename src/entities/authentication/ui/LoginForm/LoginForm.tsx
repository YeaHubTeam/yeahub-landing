import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, Icon } from 'yeahub-ui-kit';

import { Authentication } from '../../model/types/authentication';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
	const [isPasswordHidden, setIsPasswordHidden] = useState(false);
	const handleShowPassword = () => {
		setIsPasswordHidden((prev) => !prev);
		console.log('click');
	};
	const {
		register,
		formState: { errors },
	} = useFormContext<Authentication>();
	return (
		<div className={styles.wrapper}>
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
				{/* to do: не работает клик по иконке */}
				<Input
					className={styles.input}
					{...register('password')}
					placeholder="Введите пароль"
					type={isPasswordHidden ? 'text' : 'password'}
					suffix={
						<Icon
							className={styles.icon}
							onClick={handleShowPassword}
							icon={isPasswordHidden ? 'airplane' : 'password'}
						/>
					}
				/>
				{errors.password ? <div className={styles.error}>{errors.password.message}</div> : null}
			</div>
		</div>
	);
};
