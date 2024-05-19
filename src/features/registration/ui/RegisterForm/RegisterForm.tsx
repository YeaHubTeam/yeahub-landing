import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Input } from 'yeahub-ui-kit';

import { useRegistrationMutation } from '../../api/registrationApi';
import { Registration } from '../../model/types/registration';

import styles from './RegisterForm.module.css';

export const UserForm = () => {
	const [isPasswordHidden, setIsPasswordHidden] = useState(false);
	const [loginMutation, { isLoading }] = useRegistrationMutation();
	const navigate = useNavigate();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useFormContext<Registration>();

	const handleShowPassword = () => {
		setIsPasswordHidden((prev) => !prev);
	};

	const onRegistration = async (data: Registration) => {
		await loginMutation(data)
			.unwrap()
			.then(() => {
				navigate('/');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles['form-wrapper']}>
				<div className={styles['input-wrapper']}>
					<label className={styles.label} htmlFor="name">
						Имя
					</label>
					<Input className={styles.input} {...register('firstName')} placeholder="Введите имя" />
					{errors.firstName ? <div className={styles.error}>{errors.firstName.message}</div> : null}
				</div>
				<div className={styles['input-wrapper']}>
					<label className={styles.label} htmlFor="surname">
						Фамилия
					</label>
					<Input className={styles.input} {...register('lastName')} placeholder="Введите фамилию" />
					{errors.lastName ? <div className={styles.error}>{errors.lastName.message}</div> : null}
				</div>
				<div className={styles['input-wrapper']}>
					<label className={styles.label} htmlFor="phone">
						Номер телефона
					</label>
					<Input
						className={styles.input}
						{...register('phone')}
						placeholder="Введите номер телефона"
					/>
					{errors.phone ? <div className={styles.error}>{errors.phone.message}</div> : null}
				</div>
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
						{...register('passwordHash')}
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
					{errors.passwordHash ? (
						<div className={styles.error}>{errors.passwordHash.message}</div>
					) : null}
				</div>
			</div>
			<Button
				disabled={isLoading}
				onClick={handleSubmit(onRegistration)}
				theme="primary"
				value={'Зарегистрироваться'}
				className={styles['submit-button']}
			/>
			<div className={styles['input-wrapper']}>
				<label className={styles['consent-wrapper']} htmlFor="isChecked">
					<input type="checkbox" className={styles.checkbox} {...register('isChecked')} />
					<span className={styles['consent-text']}>
						Нажимая «Зарегистрироваться», вы соглашаетесь на обработку персональных данных и условия
						сервиса
					</span>
				</label>
				{errors.isChecked ? <div className={styles.error}>{errors.isChecked.message}</div> : null}
			</div>
		</div>
	);
};
