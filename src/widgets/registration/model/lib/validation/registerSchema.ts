import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const registerSchema = yup.object().shape({
	firstName: yup
		.string()
		.trim()
		.min(2, 'введите корректное имя (не менее 2 символов)')
		.required('поле обязательно для заполнения'),
	lastName: yup
		.string()
		.trim()
		.min(2, 'введите корректную фамилию (не менее 2 символов)')
		.required('поле обязательно для заполнения'),
	phone: yup.string().min(2).required('поле обязательно для заполнения'),
	email: yup.string().email('введите корректный email').required('поле обязательно для заполнения'),
	passwordHash: yup
		.string()
		.min(8, 'пароль должен содержать минимум 8 символов')
		.required('поле обязательно для заполнения'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('passwordHash')], 'Пароль должен совпадать')
		.required(),
	isChecked: yup
		.boolean()
		.oneOf(
			[true],
			'Для регистрации необходимо согласиться на обработку персональных данных и условия соглашения',
		)
		.required(),
});
