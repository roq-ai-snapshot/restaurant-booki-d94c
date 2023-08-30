import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createReservation } from 'apiSdk/reservations';
import { reservationValidationSchema } from 'validationSchema/reservations';
import { RestaurantInterface } from 'interfaces/restaurant';
import { UserInterface } from 'interfaces/user';
import { getRestaurants } from 'apiSdk/restaurants';
import { getUsers } from 'apiSdk/users';
import { ReservationInterface } from 'interfaces/reservation';

function ReservationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ReservationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createReservation(values);
      resetForm();
      router.push('/reservations');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ReservationInterface>({
    initialValues: {
      guest_name: '',
      guest_count: 0,
      reservation_date: new Date(new Date().toDateString()),
      reservation_time: new Date(new Date().toDateString()),
      date_created: new Date(new Date().toDateString()),
      date_updated: new Date(new Date().toDateString()),
      restaurant_id: (router.query.restaurant_id as string) ?? null,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: reservationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Reservations',
              link: '/reservations',
            },
            {
              label: 'Create Reservation',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Reservation
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.guest_name}
            label={'Guest Name'}
            props={{
              name: 'guest_name',
              placeholder: 'Guest Name',
              value: formik.values?.guest_name,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Guest Count"
            formControlProps={{
              id: 'guest_count',
              isInvalid: !!formik.errors?.guest_count,
            }}
            name="guest_count"
            error={formik.errors?.guest_count}
            value={formik.values?.guest_count}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('guest_count', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="reservation_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Reservation Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.reservation_date ? new Date(formik.values?.reservation_date) : null}
              onChange={(value: Date) => formik.setFieldValue('reservation_date', value)}
            />
          </FormControl>
          <FormControl id="reservation_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Reservation Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.reservation_time ? new Date(formik.values?.reservation_time) : null}
              onChange={(value: Date) => formik.setFieldValue('reservation_time', value)}
            />
          </FormControl>
          <FormControl id="date_created" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Date Created
            </FormLabel>
            <DatePicker
              selected={formik.values?.date_created ? new Date(formik.values?.date_created) : null}
              onChange={(value: Date) => formik.setFieldValue('date_created', value)}
            />
          </FormControl>
          <FormControl id="date_updated" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Date Updated
            </FormLabel>
            <DatePicker
              selected={formik.values?.date_updated ? new Date(formik.values?.date_updated) : null}
              onChange={(value: Date) => formik.setFieldValue('date_updated', value)}
            />
          </FormControl>
          <AsyncSelect<RestaurantInterface>
            formik={formik}
            name={'restaurant_id'}
            label={'Select Restaurant'}
            placeholder={'Select Restaurant'}
            fetcher={getRestaurants}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/reservations')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'reservation',
    operation: AccessOperationEnum.CREATE,
  }),
)(ReservationCreatePage);
