import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Icon, Button } from 'yeahub-ui-kit';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { errorMessageAdapter } from '@/shared/libs/errorMessageAdapter';

import { useAuthMutation } from '@/entities/authentication';
import { getAuthError } from '@/entities/authentication';
import { authActions } from '@/entities/authentication';
import { Auth } from '@/entities/authentication';
import { userActions } from '@/entities/user';

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
				dispatch(userActions.setUserData(response.user));
				navigate('/');
			})
			.catch((error) => {
				dispatch(authActions.catchError(error.status));
			});
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
						{...register('username')}
						placeholder="Введите электронную почту"
						hasError={!!errors.username?.message}
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
						hasError={!!errors.password?.message}
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
						<Button tagName="a" theme="link">
							Забыли пароль?
						</Button>
					</div>
				</div>
			</div>
			<Button
				theme="primary"
				disabled={isLoading}
				className={styles['submit-button']}
				onClick={handleSubmit(onLogin)}
			>
				Вход
			</Button>
			{errorState ? (
				<div className={styles['server-error-message']}>{errorMessageAdapter(errorState)}</div>
			) : null}
		</div>
	);
};
