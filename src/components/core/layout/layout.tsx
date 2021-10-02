import { Modal } from '@components/common';
import { ForgetPassword, Login, Register } from '@components/section';
import useUI, { ModalView } from '@hooks/useUi';
import React, { FC } from 'react';
import { Footer, Header } from '..';
import { LayoutProps } from './layout.type';

const ModalUI: FC<{
  modalView: ModalView;
  closeModal(): any;
  isModalOpen: boolean;
}> = ({ modalView, closeModal, isModalOpen }) => {
  return isModalOpen ? (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_PAGE' && <Login />}
      {modalView === 'REGISTER_PAGE' && <Register />}
      {modalView === 'FORGET_PASSWORD_PAGE' && <ForgetPassword />}
    </Modal>
  ) : null;
};

const layout = ({ children }: LayoutProps) => {
  const { closeModal, isModalOpen, openModal, modalView } = useUI();
  return (
    <>
      <Header openModal={openModal} closeModal={closeModal} />
      <main>{children}</main>
      <Footer />
      <ModalUI
        modalView={modalView}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default layout;
