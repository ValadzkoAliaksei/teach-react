import styles from './article.module.css';

type ArticlePropsType = {
  index: number;
  article: string;
};

export const Article = ({ index, article }: ArticlePropsType): JSX.Element => (
  <article className={styles[`article${index}`]}>{article}</article>
);
