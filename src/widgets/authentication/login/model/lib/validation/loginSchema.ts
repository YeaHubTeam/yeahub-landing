import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(8).minUppercase(1).minNumbers(1).minSymbols(1).required(),
});
