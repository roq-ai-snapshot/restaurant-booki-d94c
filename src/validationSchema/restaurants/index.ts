import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  zip_code: yup.string().nullable(),
  date_created: yup.date().nullable(),
  date_updated: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
