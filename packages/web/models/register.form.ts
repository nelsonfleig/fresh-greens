import * as Yup from 'yup';

export const registerSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .max(50)
    .required('Required'),
});
