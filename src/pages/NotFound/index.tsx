import styles from './NotFound.module.scss';
import tema from 'styles/Tema.module.scss';
import { ReactComponent as NotFoundImg } from 'assets/not_found.svg';
import classNames from 'classnames';

const NotFound = () => {
    return (
        <div className={classNames({
            [styles.container]: true,
            [tema.container]: true,
        })}>
            <NotFoundImg />
        </div>
    );
};

export default NotFound;