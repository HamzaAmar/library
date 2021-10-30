import * as Yup from 'yup';

export const registerValidation = Yup.object({
  name: Yup.string().required('user Name is Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or More')
    .required('Password is Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Confirm Password must match Password')
    .required('Confirm Password is Required')
});

export const loginValidation = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or More')
    .required('Password is Required')
});
