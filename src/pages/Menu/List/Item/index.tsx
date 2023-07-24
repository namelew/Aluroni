import logo from 'assets/logo.svg';
import styles from './Item.module.scss';
import items from '../itens.json';

type Props = typeof items[0];

const Item = ( { title, description, category, size, serving, price } : Props) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={logo} alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__type}>
                        {category.label}
                    </div>
                    <div className={styles.item__potion}>
                        {size} g
                    </div>
                    <div className={styles.item__peopleAmount}>
                        Serve {serving} pessoa{ serving === 1 ? '' : 's'}
                    </div>
                    <div className={styles.item__value}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;