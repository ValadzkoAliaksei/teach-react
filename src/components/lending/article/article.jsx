import PropTypes from 'prop-types';

import styles from './article.module.css';

export const Article = ({ index, article }) => <article className={styles[`article${index}`]}>{article}</article>;

Article.propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.string.isRequired,
};
