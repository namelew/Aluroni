import Item from './Item';
import styles from './List.module.scss';
import itens from './itens.json';

const List = () => {
    return (
        <div className={styles.list}>
            {itens.map(item => (
                <Item key={item.id}/>
            ))}
        </div>
    )
}

export default List;