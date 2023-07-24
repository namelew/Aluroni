import { useEffect, useState } from 'react';
import Item from './Item';
import styles from './List.module.scss';
import itens from './itens.json';

interface Props {
    search: string,
    filter: number | null,
    sorter: string,
}

const List = ( { search, filter, sorter } : Props) => {
    const [list, setList] = useState(itens);

    const testSearch = (title: string) => {
        const regex = RegExp(search, "i");
        return regex.test(title);
    }

    const testFilter = (id: number) => {
        return  filter === null || filter === id;
    }

    const sort = (newList : typeof itens) => {
        switch (sorter) {
            case 'porcao': 
                return newList.sort( (a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                return newList.sort( (a, b) => a.serving > b.serving ? 1 : -1);
            case 'preco':
                return newList.sort( (a, b) => a.price > b.price ? 1 : -1);
            default:
                return newList;
        }
    }

    useEffect(() => {
        const newList = itens.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(sort(newList));
    }, [search, filter, sorter]);

    return (
        <div className={styles.list}>
            {list.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}

export default List;