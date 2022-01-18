import * as Yup from 'yup';

export const placeOrderSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
});
