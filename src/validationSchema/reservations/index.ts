import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  guest_name: yup.string().required(),
  guest_count: yup.number().integer().required(),
  reservation_date: yup.date().required(),
  reservation_time: yup.date().required(),
  date_created: yup.date().required(),
  date_updated: yup.date().required(),
  restaurant_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
