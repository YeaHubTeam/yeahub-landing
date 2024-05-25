import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Icon, Button } from 'yeahub-ui-kit';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

import { useAuthMutation } from '@/entities/authentication';
import { getAuthError } from '@/entities/authentication';
import { authActions } from '@/entities/authentication';
import { Auth } from '@/entities/authentication';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
	const errorState = useSelector(getAuthError);
	const dispatch = useAppDispatch();
	const [isPasswordHidden, setIsPasswordHidden] = useState(false);
	const [loginMutation, { isLoading }] = useAuthMutation();
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useFormContext<Auth>();

	const handleShowPassword = () => {
		setIsPasswordHidden((prev) => !prev);
	};

	const onLogin = async (data: Auth) => {
		await loginMutation(data)
			.unwrap()
			.then((response) => {
				dispatch(authActions.setUserData(response));
				navigate('/');
			})
			.catch((error) => {
				console.error(error);
				dispatch(authActions.catchError(error.status));
			});
	};

	//todo Поправить ошибку на error.message

	return (
		<div className={styles.wrapper}>
			<div className={styles['form-wrapper']}>
				<div className={styles['input-wrapper']}>
					<label className={styles.label} htmlFor="email">
						Электронная почта
					</label>
					<Input
						className={styles.input}
						{...register('username')}
						placeholder="Введите электронную почту"
					/>
					{errors.username ? <div className={styles.error}>{errors.username.message}</div> : null}
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
						<Button tagName="a" theme="link" value={'Забыли пароль?'} />
					</div>
				</div>
			</div>
			<Button
				theme="primary"
				disabled={isLoading}
				value={'Вход'}
				className={styles['submit-button']}
				onClick={handleSubmit(onLogin)}
			/>
			{errorState ? (
				<div className={styles['server-error-message']}>
					Что-то пошло не так! Статус-код ошибки: {errorState}
				</div>
			) : null}
		</div>
	);
};
