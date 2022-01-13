import PropTypes from 'prop-types';

import styles from './aside.module.css';

export const Aside = ({ index, aside }) => <aside className={styles[`aside${index}`]}>{aside}</aside>;

Aside.propTypes = {
  index: PropTypes.number.isRequired,
  aside: PropTypes.string.isRequired,
};
