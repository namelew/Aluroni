import { Dish } from 'types/dish';
import styles from './TagsDish.module.scss';
import classNames from 'classnames';

const TagsDish = ( {category, size, serving, price} : Dish) => {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
            })}>
                {category.label}
            </div>
            <div className={styles.tags__potion}>
                {size} g
            </div>
            <div className={styles.tags__peopleAmount}>
                Serve {serving} pessoa{ serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__value}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    );
};

export default TagsDish;