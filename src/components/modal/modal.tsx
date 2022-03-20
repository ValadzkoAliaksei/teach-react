import { useRef, useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

type ModalPropType = {
  closeModal: () => void;
  children: JSX.Element;
};

export const Modal = ({ children, closeModal }: ModalPropType): JSX.Element => {
  const el = useRef(document.createElement('div'));
  el.current.className = 'modal';

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    closeModal();
  };

  useEffect(() => {
    const { current } = el;
    document.body.appendChild(current);
    return () => {
      document.body.removeChild(current);
    };
  }, []);

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.messageContainer}>{children}</div>
      <div className={styles.backdrop} onClick={handleClose} aria-hidden />
    </div>,
    el.current,
  );
};
