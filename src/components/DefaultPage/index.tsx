import { Outlet } from 'react-router-dom';
import styles from './DefaultPage.module.scss';
import tema from 'styles/Tema.module.scss';

const DefaultPage = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={tema.container}>
                <Outlet />
            </div>
        </>
    );
};

export default DefaultPage;