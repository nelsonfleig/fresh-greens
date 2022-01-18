import * as Yup from 'yup';

export const checkoutSchema = Yup.object({
  address: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
});
