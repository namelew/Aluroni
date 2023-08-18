import classNames from 'classnames';
import styles from './Dish.module.scss';
import menu from 'data/bill-of-fare.json';
import { useLocation } from 'react-router-dom';

const Dish = () => {
    const { state } = useLocation();
    const { dish } = state as { dish: typeof menu[0]};

    return (
        <>
            <button className={styles.back}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.title}>
                    {dish.title}
                </h1>
                <div className={styles.image}>
                    <img src={dish.photo} alt={dish.title} />
                </div>
                <div className={styles.content}>
                    <p className={styles.content__description}>
                        {dish.description}
                    </p>
                    <div className={classNames({
                        [styles.tags__type]: true,
                        [styles[`tags__type__${dish.category.label.toLowerCase()}`]]: true,
                    })}>
                        {dish.description}
                    </div>
                    <div className={styles.tags__porcao}>
                        {dish.size}g
                    </div>
                    <div className={styles.tags__qtdpessoas}>
                        Serve {dish.serving} pessoa{dish.serving == 1 ? '' : 's'}
                    </div>
                    <div className={styles.tags__valor}>
                        R$ {dish.price.toFixed(2)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dish;