import * as yup from 'yup';

export const userSchema = yup.object().shape({
	name: yup.string().trim().min(2).required(),
	surname: yup.string().trim().min(2).required(),
	phone: yup.string().min(2).required(),
	email: yup.string().email().required(),
});
