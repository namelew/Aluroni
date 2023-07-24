import logo from 'assets/logo.svg';
import styles from './Item.module.scss';

const Item = () => {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={logo} alt="image" />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2> Macarrão </h2>
                    <p> Descrição do Macarrão </p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__type}>
                        Massa
                    </div>
                    <div className={styles.item__potion}>
                        400g
                    </div>
                    <div className={styles.item__peopleAmount}>
                        Serve 2 pessoas
                    </div>
                    <div className={styles.item__value}>
                        R$ 50,00
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;