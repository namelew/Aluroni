import Header from 'components/Header';
import styles from './Menu.module.scss'
import { ReactComponent as Logo} from 'assets/logo.svg';

const Menu = () => {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <Header>A casa do código e da massa</Header>
        </main>
    )
}

export default Menu;