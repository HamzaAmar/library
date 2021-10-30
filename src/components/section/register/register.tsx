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
import firebase from '@utils/firebase';
import useProvideAuth from '@hooks/useAuth';
import { registerValidation } from '@utils/validation';
import { useFormik } from 'formik';
import React, { FormEvent, useEffect } from 'react';
import * as Yup from 'yup';

import styles from './register.module.css';

const { getRedirectResult, GoogleAuthProvider, auth } = firebase;

const f = () => {
  getRedirectResult(auth)
    .then((result: any) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result?.user;
      console.log(
        'Success Area',
        '-------------------------------------------------------',
        'this is the value of user',
        user,
        'this the value of credential',
        credential,
        'this the value of token',
        token
      );
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(
        'Error Area',
        '-------------------------------------------------------',
        'this the value of credential',
        credential,
        'this the value of email',
        email,
        'this the value of error',
        error
      );
    });
};

const register = () => {
  const { signup, signupWithGoogle } = useProvideAuth();
  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    isValidating,
    values,
    touched,
    errors
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async (values) => {
      try {
        const result = await signup(values.email, values.password);
        console.log(result);
      } catch (err: any) {
        console.error(err);
        console.log(err);
        alert(err.message);
      }
    },
    validationSchema: registerValidation
  });

  const googleProvider = () => {
    console.log('hello world my name is hamza miloud amar');
    signupWithGoogle();
  };

  useEffect(() => {
    if (isSubmitting && !isValidating) {
      const errorElement = document.querySelector(
        '[data-error=true]'
      ) as HTMLElement;
      errorElement?.focus();
    }
  }, [isSubmitting, isValidating]);

  useEffect(() => {
    f();
  }, [getRedirectResult]);

  const { setModalView, closeModal } = useUI();

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
                  onClick={() => setModalView('LOGIN_VIEW')}
                >
                  Login
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="textCenter">
          <Heading>register</Heading>
          <p>See all your book and read them online</p>
        </div>
        <div>
          <Button
            variant="outline"
            className={styles.margin}
            onClick={googleProvider}
            size="fluid"
          >
            Sign in with Gmail
          </Button>
          <Button variant="outline" size="fluid">
            Sign in with Facebook
          </Button>
        </div>

        <Separator title="register with Email" />

        <form noValidate onSubmit={handleSubmit}>
          {/* <FormController required label="name" id="name">
            <Input size="fluid" name="name" placeholder="Enter Your Name" />
          </FormController> */}
          <FormController required label="Name" id="name">
            <Input
              size="fluid"
              name="name"
              value={values.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
              touched={touched.name}
              error={errors.name}
            />
          </FormController>
          <FormController required label="Email" id="email">
            <Input
              size="fluid"
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Your Email"
              touched={touched.email}
              error={errors.email}
            />
          </FormController>
          <FormController required label="Password" id="password">
            <Input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              touched={touched.password}
              error={errors.password}
            />
          </FormController>
          <FormController required label="confirmPassword" id="confirmPassword">
            <Input
              size="fluid"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Enter Your Confirm Password"
              touched={touched.confirmPassword}
              error={errors.confirmPassword}
            />
          </FormController>

          <Button type="submit" size="fluid">
            Register
          </Button>
        </form>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.buttonContainer}>
          <Button
            size="small"
            icon={<Cross width="20" />}
            onClick={() => closeModal()}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default register;
