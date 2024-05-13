import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { SocialAuthenticateList } from '@/features/authentication/authenticate/socialAuthenticate/SocialAuthenticateList';
import { LoginForm, RegistrationLabel } from '@/features/authentication/login';

import { loginSchema } from '../../model/lib/validation/loginSchema';
import { LoginSchema } from '../../model/types/loginTypes';

export const LoginCreateForm = () => {
	const methods = useForm<LoginSchema>({
		resolver: yupResolver(loginSchema),
		mode: 'onTouched',
	});
	return (
		<>
			<FormProvider {...methods}>
				<LoginForm />
			</FormProvider>
			<SocialAuthenticateList />
			<RegistrationLabel />
		</>
	);
};
