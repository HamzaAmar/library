import { Logo } from '@components/common';
import { Cross } from '@components/icons';
import {
  Button,
  FormController,
  Heading,
  Input,
  Separator
} from '@components/ui';
import useProvideAuth from '@hooks/useAuth';
import React, { FormEvent } from 'react';
import styles from './register.module.css';

const register = () => {
  const { signup } = useProvideAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      await signup('hamza', 'hamzamiloudamar@gmail.com', '123123');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.headerMenu}>
          <Logo />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>Login</li>
            </ul>
          </nav>
        </div>
        <div className="textCenter">
          <Heading>register</Heading>
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

        <Separator title="register with Email" />

        <form onSubmit={handleSubmit}>
          <FormController required label="name" id="name">
            <Input size="fluid" name="name" placeholder="Enter Your Name" />
          </FormController>
          <FormController required label="Email" id="email">
            <Input size="fluid" name="email" placeholder="Enter Your Email" />
          </FormController>
          <FormController required label="Password" id="password">
            <Input name="Password" placeholder="Enter Your Password" />
          </FormController>
          <FormController required label="Password" id="password">
            <Input
              size="fluid"
              name="confirmPassword"
              placeholder="Enter Your Confirm Password"
            />
          </FormController>

          <Button size="fluid">Register</Button>
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

export default register;
