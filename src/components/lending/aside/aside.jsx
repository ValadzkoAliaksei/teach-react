import styles from "./aside.module.css";

export const Aside = ({ index, aside }) => (
  <aside className={styles[`aside${index}`]}>{aside}</aside>
);
