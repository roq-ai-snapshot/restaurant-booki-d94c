import * as yup from 'yup';

export const chefValidationSchema = yup.object().shape({
  specialty: yup.string().required(),
  experience_years: yup.number().integer().required(),
  date_created: yup.date().required(),
  date_updated: yup.date().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
