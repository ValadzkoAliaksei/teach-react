import { Article } from './article';
import { Aside } from './aside';

import { lendingText } from '../../constants/lending-text';

import styles from './lending.module.css';

export const Lending = () => (
  <div className={styles.lending}>
    <header className={styles.header}>
      <div className={styles.orange}>{lendingText.logo}</div>
      <nav className={styles.nav}>{lendingText.nav}</nav>
    </header>
    <main className={styles.main}>
      {lendingText.mainAtrticles.map(({ mainAtrticle, key }, index) => (
        <Article index={index} article={mainAtrticle} key={key} />
      ))}
      {lendingText.asides.map((aside, index) => (
        <Aside index={index} aside={aside} key={index.toString()} />
      ))}
      {lendingText.atrticles.map((atrticle, index) => (
        <Article index={index + 2} article={atrticle} key={index.toString()} />
      ))}
    </main>
    <footer className={styles.footer}>footer</footer>
  </div>
);
