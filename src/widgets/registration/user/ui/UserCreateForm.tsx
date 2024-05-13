import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { SocialRegistrationList } from '@/features/registration/registrate/socialRegistrate/SocialRegistrationList';
import { LoginLabel, UserForm } from '@/features/registration/user';

import { userSchema } from '../model/lib/validation/userSchema';
import { UserSchema } from '../model/types/userTypes';

export const UserCreateForm = () => {
	const methods = useForm<UserSchema>({
		resolver: yupResolver(userSchema),
		mode: 'onTouched',
	});

	return (
		<>
			<FormProvider {...methods}>
				<UserForm />
			</FormProvider>
			<SocialRegistrationList />
			<LoginLabel />
		</>
	);
};
