import { Logo } from '@components/common';
import { Bag } from '@components/icons';
import { Button, useUI } from '@components/ui';
import { NAV_DATA } from '@constants/nav';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';

function Item({ title, link }) {
  return (
    <li className={styles.item}>
      <Link href={link}>
        <a href="">{title}</a>
      </Link>
    </li>
  );
}

const header = () => {
  const { openModal, setModalView } = useUI();

  function openLogin() {
    openModal();
    setModalView('LOGIN_VIEW');
  }

  function openRegister() {
    openModal();
    setModalView('SIGNUP_VIEW');
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <Logo />
        <ul className={styles.list}>
          {NAV_DATA.map(({ id, ...rest }) => (
            <Item key={id} {...rest} />
          ))}
        </ul>
      </div>
      <div className={styles.rightHeader}>
        <Button
          style={{ position: 'relative' }}
          radius="full"
          variant="icon"
          color="transparent"
        >
          <div className={styles.badge}>01</div>
          <Bag width="15" />
        </Button>
        <Button color="transparent" onClick={openLogin}>
          Sign In
        </Button>
        <Button
          radius="rounded"
          size="medium"
          color="secondary"
          onClick={openRegister}
        >
          Create Account
        </Button>
      </div>
    </header>
  );
};

export default header;
