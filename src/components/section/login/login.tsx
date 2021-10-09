import { Logo } from '@components/common';
import { Cross } from '@components/icons';
import {
  Button,
  FormController,
  Heading,
  Input,
  Separator
} from '@components/ui';
import React from 'react';
import styles from './login.module.css';

const login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.headerMenu}>
          <Logo />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>Forget Password</li>
              <li className={styles.item}>Register</li>
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

        <form>
          <FormController required label="Email" id="email">
            <Input size="fluid" name="email" placeholder="Enter Your Email" />
          </FormController>
          <FormController required label="Password" id="password">
            <Input name="Password" placeholder="Enter Your Password" />
          </FormController>

          <Button size="fluid">SIgn In</Button>
        </form>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.buttonContainer}>
          <Button size="small" icon={<Cross width="20" />}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default login;
