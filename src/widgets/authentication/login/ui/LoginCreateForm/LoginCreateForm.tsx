import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { LoginForm } from '@/features/authentication';
import { SocialRegister } from '@/features/authentication/ui/SocialRegister/SocialRegister';

import { loginSchema } from '../../model/lib/validation/loginSchema';
import { LoginSchema } from '../../model/types/loginTypes';
import { RegistrationLabel } from '../RegistrationLabel/RegistrationLabel';

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
