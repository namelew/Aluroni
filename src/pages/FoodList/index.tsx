import { useState } from 'react';
import styles from './FoodList.module.scss';
import tema from 'styles/Tema.module.scss';
import Searcher from './Searcher';
import Filters from 'components/Filters';
import Sorter, { SortOptions } from './Sorter';
import List from './List';

const FoodList = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [sorter, setSorter] = useState<SortOptions>('');

    return (
        <section className={styles.billOfFare}>
            <h3 className={tema.title}>Cardápio</h3>
            <Searcher search={search} setSearch={setSearch}/>
            <div className={styles.billOfFare__filters}>
                <Filters filter={filter} setFilter={setFilter}/>
                <Sorter sorter={sorter} setSorter={setSorter}/>
            </div>
            <List search={search} filter={filter} sorter={sorter}/>
        </section>
    );
};

export default FoodList;