import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const registerSchema = yup.object().shape({
	firstName: yup.string().trim().min(2).required(),
	lastName: yup.string().trim().min(2).required(),
	phone: yup.string().min(2).required(),
	email: yup.string().email().required(),
	passwordHash: yup.string().min(8).required(),
	isChecked: yup
		.boolean()
		.oneOf(
			[true],
			'Для регистрации необходимо согласиться на обработку персональных данных и условия соглашения',
		)
		.required(),
});
