import * as yup from 'yup';

import { userSchema } from '../lib/validation/userSchema';

userSchema;

export type UserSchema = yup.InferType<typeof userSchema>;
