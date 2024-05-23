import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { SocialAuthenticateList } from '@/features/authentication/socialAuthenticate/SocialAuthenticateList';
import { LoginLabel, UserForm } from '@/features/registration';

import { registerSchema } from '../model/lib/validation/registerSchema';
import { UserSchema } from '../model/types/userTypes';

export const UserCreateForm = () => {
	const methods = useForm<UserSchema>({
		resolver: yupResolver(registerSchema),
		mode: 'onTouched',
	});

	return (
		<>
			<FormProvider {...methods}>
				<UserForm />
			</FormProvider>
			<SocialAuthenticateList isAuthenticate={false} />
			<LoginLabel />
		</>
	);
};