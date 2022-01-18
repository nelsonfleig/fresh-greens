import * as Yup from 'yup';

export const createShopSchema = Yup.object({
  name: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  shopImage: Yup.mixed().required(),
});
