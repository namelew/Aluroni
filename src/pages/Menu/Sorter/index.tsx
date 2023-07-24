import styles from './Sorter.module.scss';
import options from './options.json';

type IOptions = typeof options[0];

const Sorter = () => {
    return (
        <button className={styles.sorter}>
            <span>Ordenar por</span>
            <div className={styles.sorter__options}>
                {options.map(option => (
                    <div className={styles.sorter__option} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Sorter;