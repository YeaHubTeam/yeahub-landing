import * as yup from 'yup';

export const registerSchema = yup.object().shape({
	name: yup.string().trim().min(2).required(),
	surname: yup.string().trim().min(2).required(),
	phone: yup.string().min(2).required(),
	email: yup.string().email().required(),
	isChecked: yup
		.boolean()
		.oneOf(
			[true],
			'Для регистрации необходимо согласиться на обработку персональных данных и условия соглашения',
		)
		.required(),
});
