import { Logo } from '@components/common';
import { Cross } from '@components/icons';
import {
  Button,
  FormController,
  Heading,
  Input,
  Separator,
  useUI
} from '@components/ui';
import useProvideAuth from '@hooks/useAuth';
import { useFormik } from 'formik';
import React, { FormEvent, useEffect } from 'react';
import styles from './forgetPassword.module.css';
import * as Yup from 'yup';
import { loginValidation } from '@utils/validation';

const login = () => {
  const { signin } = useProvideAuth();
  const { setModalView, closeModal } = useUI();
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
    isValidating
  } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        const result = await signin(values.email, values.password);
      } catch (err: any) {
        console.error(err);
        console.log(err);
        alert(err.message);
      }
    },
    validationSchema: loginValidation
  });

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      const errorElement = document.querySelector(
        '[data-error=true]'
      ) as HTMLElement;
      errorElement?.focus();
    }
  }, [isSubmitting, isValidating]);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.headerMenu}>
          <Logo />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Button
                  variant="text"
                  onClick={() => setModalView('SIGNUP_VIEW')}
                >
                  Register
                </Button>
              </li>
              <li className={styles.item}>
                <Button
                  variant="text"
                  onClick={() => setModalView('FORGOT_VIEW')}
                >
                  Forget Password
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="textCenter">
          <Heading>Login</Heading>
          <p>See all your book and read them online</p>
        </div>
        <div>
          <Button variant="outline" className={styles.margin} size="fluid">
            Sign in with Gmail
          </Button>
          <Button variant="outline" size="fluid">
            Sign in with Facebook
          </Button>
        </div>

        <Separator title="Login with Email" />

        <form noValidate onSubmit={handleSubmit}>
          <FormController required label="Email" id="email">
            <Input
              size="fluid"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              touched={touched.email}
              error={errors.email}
            />
          </FormController>
          <FormController required label="Password" id="password">
            <Input
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              type="password"
              touched={touched.password}
              error={errors.password}
            />
          </FormController>

          <Button type="submit" size="fluid">
            SIgn In
          </Button>
        </form>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.buttonContainer}>
          <Button
            size="small"
            onClick={() => closeModal()}
            icon={<Cross width="20" />}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default login;
