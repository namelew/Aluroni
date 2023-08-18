import { Outlet } from 'react-router-dom';
import styles from './DefaultPage.module.scss';
import theme from 'styles/Theme.module.scss';

const DefaultPage = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={theme.container}>
                <Outlet />
            </div>
        </>
    );
};

export default DefaultPage;