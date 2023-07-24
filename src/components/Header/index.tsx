import React from 'react';
import styles from './Header.module.scss';

interface Props {
    children?: React.ReactNode;
}

const Header = ( { children } : Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__text}>
        {children}
      </div>
    </header>
  );
};

export default Header;