import { FC, useRef, useEffect, useCallback } from 'react';
import styles from './modal.module.css';
import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
  enableBodyScroll
} from 'body-scroll-lock';

interface ModalProps {
  className?: string;
  children?: any;
  onClose: () => void;
  onEnter?: () => void | null;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      if (modal) {
        enableBodyScroll(modal);
      }
      clearAllBodyScrollLocks();
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div className={styles.root}>
      <div className={styles.modal} role="dialog" ref={ref}>
        {/* <FocusTrap focusFirst>{children}</FocusTrap> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
