import styles from './NotFound.module.scss';
import theme from 'styles/Theme.module.scss';
import { ReactComponent as NotFoundImg } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className={classNames({
            [styles.container]: true,
            [theme.container]: true,
        })}>
            <div className={styles.back}>
                <button onClick={() => { navigate(-1); }}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImg />
        </div>
    );
};

export default NotFound;