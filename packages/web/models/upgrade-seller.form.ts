import * as Yup from 'yup';

export const upgradeSellerSchema = Yup.object({
  sellerName: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  sellerImage: Yup.mixed().required(),
});
