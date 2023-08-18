import styles from './Item.module.scss';
import { Dish } from 'types/dish';
import TagsDish from 'components/TagsDish';
import { useNavigate } from 'react-router-dom';

const Item = ( dish : Dish) => {
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={ () => navigate(`/prato/${dish.id}`)}>
            <div className={styles.item__image}>
                <img src={dish.photo} alt={dish.title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2> {dish.title} </h2>
                    <p> {dish.description} </p>
                </div>
                <TagsDish {...dish}/>
            </div>
        </div>
    );
};

export default Item;