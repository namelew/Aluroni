import styles from './Item.module.scss';
import { Dish } from 'types/dish';
import TagsDish from 'components/TagsDish';

const Item = ( dish : Dish) => {
    return (
        <div className={styles.item}>
            <div className={styles.tags__image}>
                <img src={dish.photo} alt={dish.title} />
            </div>
            <div className={styles.tags__description}>
                <div className={styles.tags__title}>
                    <h2> {dish.title} </h2>
                    <p> {dish.description} </p>
                </div>
                <TagsDish {...dish}/>
            </div>
        </div>
    );
};

export default Item;