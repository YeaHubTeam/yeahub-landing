import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Icon, Button } from 'yeahub-ui-kit';

import { State } from '@/shared/config/store/State';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { ErrorMessageRenderer } from '@/shared/ui/ErrorMessageRenderer/ErrorMessageRenderer';

import { useLoginMutation } from '../../api/loginApi';
import { loginPageActions } from '../../model/slices/loginPageSlice';
import { Login } from '../../model/types/login';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
	const errorState = useSelector((state: State) => state.auth.error);
	const dispatch = useAppDispatch();
	const [isPasswordHidden, setIsPasswordHidden] = useState(false);
	const [loginMutation] = useLoginMutation();
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useFormContext<Login>();

	const handleShowPassword = () => {
		setIsPasswordHidden((prev) => !prev);
	};

	const onLogin = async (data: Login) => {
		await loginMutation(data)
			.unwrap()
			.then((response) => {
				dispatch(loginPageActions.setUserData(response));
				navigate('/');
			})
			.catch((error) => {
				console.error(error);
				dispatch(loginPageActions.catchError(error.status));
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
				value={'Вход'}
				className={styles['submit-button']}
				onClick={handleSubmit(onLogin)}
			/>
			{errorState ? <ErrorMessageRenderer props={errorState} /> : null}
		</div>
	);
};
