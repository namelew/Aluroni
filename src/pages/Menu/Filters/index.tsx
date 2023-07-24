import styles from './Filters.module.scss';
import filters from './filters.json';

type IOption = typeof filters[0];

const Filters = () => {
    const selectFilter = ( option : IOption) => {

    }

    return (
        <div className={styles.filters}>
            { filters.map( option => <button className={styles.filters__filter} key={option.id} onClick={() => selectFilter(option)}> {option.label} </button>) }
        </div>
    )
}

export default Filters;