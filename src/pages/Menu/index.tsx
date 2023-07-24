import Header from 'components/Header';
import { useState } from 'react';
import styles from './Menu.module.scss';
import { ReactComponent as Logo} from 'assets/logo.svg';
import Searcher from './Searcher';
import Filters from './Filters';

const Menu = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <Header>A casa do código e da massa</Header>

            <section className={styles.billOfFare}>
                <h3 className={styles.billOfFare__title}>Cardápio</h3>
                <Searcher search={search} setSearch={setSearch}/>
                <div className={styles.billOfFare__filters}>
                    <Filters filter={filter} setFilter={setFilter}/>
                </div>
            </section>
        </main>
    )
}

export default Menu;