import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  favorite_cuisine: yup.string().nullable(),
  total_reservations: yup.number().integer().required(),
  date_created: yup.date().required(),
  date_updated: yup.date().required(),
  user_id: yup.string().nullable().required(),
  favorite_restaurant_id: yup.string().nullable().required(),
});
