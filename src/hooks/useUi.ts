import { useReducer } from 'react';

const initialState: InitialState = {
  isModalOpen: false,
  modalView: 'LOGIN_PAGE'
};

interface InitialState {
  isModalOpen: boolean;
  modalView: ModalView;
}
export type ModalView =
  | 'LOGIN_PAGE'
  | 'REGISTER_PAGE'
  | 'FORGET_PASSWORD_PAGE'
  | null;

type Action =
  | { type: 'OPEN_MODAL'; modalView: ModalView }
  | { type: 'CLOSE_MODAL' };

function uiReducer(state: InitialState, action: Action) {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        isModalOpen: true,
        modalView: action.modalView
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalOpen: false,
        modalView: null
      };
    }
  }
}

const useUI = () => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openModal = (modalView: ModalView) =>
    dispatch({ type: 'OPEN_MODAL', modalView });

  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

  return { ...state, openModal, closeModal };
};

export default useUI;
