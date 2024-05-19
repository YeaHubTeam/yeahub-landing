import { useFormContext } from 'react-hook-form';
import { Button, Input } from 'yeahub-ui-kit';

import { Registration } from '../../model/types/registration';

import styles from './RegisterForm.module.css';

export const UserForm = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<Registration>();

	return (
		<div className={styles.wrapper}>
			<div className={styles['form-wrapper']}>
				<div className={styles['input-wrapper']}>
					<label className={styles.label} htmlFor="name">
						Имя
					</label>
					<Input className={styles.input} {...register('name')} placeholder="Введите имя" />
					{errors.name ? <div className={styles.error}>{errors.name.message}</div> : null}
				</div>
				<div className={styles['input-wrapper']}>
					<label className={styles.label} htmlFor="surname">
						Фамилия
					</label>
					<Input className={styles.input} {...register('surname')} placeholder="Введите фамилию" />
					{errors.surname ? <div className={styles.error}>{errors.surname.message}</div> : null}
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
			</div>
			<Button theme="primary" value={'Зарегистрироваться'} className={styles['submit-button']} />
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
