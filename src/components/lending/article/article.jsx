import styles from "./article.module.css";

export const Article = ({ index, article }) => (
  <article className={styles[`article${index}`]}>{article}</article>
);
