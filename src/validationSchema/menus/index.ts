import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  category: yup.string().required(),
  date_created: yup.date().required(),
  date_updated: yup.date().required(),
  restaurant_id: yup.string().nullable().required(),
});
