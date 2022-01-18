import * as Yup from 'yup';

export const addProductSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  unit: Yup.string().required('Required'),
  productImage: Yup.mixed().required('Image required'),
});
