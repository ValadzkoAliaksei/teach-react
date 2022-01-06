import { createPortal } from "react-dom";

import styles from "./modal.module.css";

export const Modal = (props) =>
  createPortal(
    <div className={styles.modal}>
      <div className={styles.messageContainer}>{props.children}</div>
      <div className={styles.backdrop} onClick={props.closeModal} />
    </div>,
    document.getElementById("root")
  );
