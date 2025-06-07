import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import Button from './Button';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name cannot exceed 50 characters'),
  email: Yup.string().required('Email is required').email('Invalid email format'),
  bookingDate: Yup.date()
    .required('Booking date is required')
    .min(new Date(), 'Booking date cannot be in the past'),
  message: Yup.string().max(500, 'Comment cannot exceed 500 characters'),
});

type BookingFormValues = {
  name: string;
  email: string;
  bookingDate: Date | null;
  message: string;
};

const initialValues = {
  name: '',
  email: '',
  bookingDate: null,
  message: '',
} as BookingFormValues;

const BookingForm = () => {
  const handleSubmit = (
    values: BookingFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    console.log('Form submitted with values:', values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="w-full py-11 px-[57px] rounded-[10px] border border-gray-light">
      <h3 className="text-xl font-semibold text-main">Book your campervan now</h3>
      <p className="pt-2 text-gray">Stay connected! We are always ready to help you.</p>

      <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className="w-full mt-6">
            <div className="flex gap-3.5 flex-col">
              <div>
                <label>
                  <Field
                    className="w-full p-[18px] bg-inputs rounded-[12px] text-gray"
                    type="text"
                    name="name"
                    placeholder="Name*"
                  />
                  <ErrorMessage name="name" component="p" className="text-button" />
                </label>
              </div>

              <div>
                <label>
                  <Field
                    className="w-full p-[18px] bg-inputs rounded-[12px] text-gray"
                    type="email"
                    name="email"
                    placeholder="Email*"
                  />
                  <ErrorMessage name="email" component="p" className="text-button" />
                </label>
              </div>

              <div>
                <label className="w-full">
                  <DatePicker
                    wrapperClassName="custom-calendar w-full"
                    className="w-full p-[18px] bg-inputs rounded-[12px] text-gray "
                    useWeekdaysShort={true}
                    selected={values.bookingDate}
                    calendarStartDay={1}
                    placeholderText="Booking date*"
                    onChange={(date) => setFieldValue('bookingDate', date)}
                    dateFormat="yyyy-MM-dd"
                    name="bookingDate"
                  />
                  <ErrorMessage name="bookingDate" component="p" className="text-button" />
                </label>
              </div>

              <div>
                <label>
                  <Field
                    className="w-full p-[18px] bg-inputs rounded-[12px] text-gray"
                    as="textarea"
                    name="message"
                    placeholder="Your comment..."
                  />
                  <ErrorMessage name="message" component="p" className="text-button" />
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="mt-6" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
