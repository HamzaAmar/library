import { Modal } from '@components/common';
import { ForgetPassword, Login, Register } from '@components/section';
import { useUI } from '@components/ui';
import React, { FC } from 'react';
import { Footer, Header } from '..';
import { LayoutProps } from './layout.type';
import styles from './layout.module.css';

const ModalUI = () => {
  const { closeModal, displayModal, modalView } = useUI();

  return displayModal ? (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_VIEW' && <Login />}
      {modalView === 'SIGNUP_VIEW' && <Register />}
      {modalView === 'FORGOT_VIEW' && <ForgetPassword />}
    </Modal>
  ) : null;
};

const SideBarUI = () => {
  const { closeSidebar, displaySidebar, sidebarView } = useUI();

  return displaySidebar ? (
    <Modal onClose={closeSidebar}>
      {sidebarView === 'LOGIN_VIEW' && <Login />}
    </Modal>
  ) : null;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
      <ModalUI />
      <SideBarUI />
    </div>
  );
};

export default layout;
