import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { SocialRegister } from '@/features/authentication/authenticate/socialRegister/SocialRegisterList/ui/SocialRegisterList';
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
			<SocialRegister />
			<RegistrationLabel />
		</>
	);
};
