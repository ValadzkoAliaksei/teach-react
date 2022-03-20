import styles from './aside.module.css';

type AsidePropsType = {
  index: number;
  aside: string;
};

export const Aside = ({ index, aside }: AsidePropsType): JSX.Element => (
  <aside className={styles[`aside${index}`]}>{aside}</aside>
);
