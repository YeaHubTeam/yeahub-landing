import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const loginSchema = yup.object().shape({
	username: yup.string().email().required(),
	password: yup.string().min(8).required(),
});
