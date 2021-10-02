import { Logo } from '@components/common';
import { Bag } from '@components/icons';
import { Button } from '@components/ui';
import { NAV_DATA } from '@constants/nav';
import { ModalView } from '@hooks/useUi';
import React from 'react';
import styles from './header.module.css';
interface HeaderProps {
  openModal: (modalView: ModalView) => void;
  closeModal: () => void;
}

const header = ({ openModal, closeModal }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <Logo />
        <ul className={styles.list}>
          {NAV_DATA.map((item) => (
            <li key={item.id} className={styles.item}>
              {item.title}
            </li>
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
        <Button color="transparent" onClick={() => openModal('LOGIN_PAGE')}>
          Sign In
        </Button>
        <Button
          radius="rounded"
          size="medium"
          color="secondary"
          onClick={() => openModal('REGISTER_PAGE')}
        >
          Create Account
        </Button>
      </div>
    </header>
  );
};

export default header;
