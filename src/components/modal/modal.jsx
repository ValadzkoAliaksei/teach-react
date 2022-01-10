import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './modal.module.css';

export const Modal = (props) =>
  createPortal(
    <div className={styles.modal}>
      <div className={styles.messageContainer}>{props.children}</div>
      <div className={styles.backdrop} onClick={props.closeModal} aria-hidden />
    </div>,
    document.getElementById('root'),
  );

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
};
