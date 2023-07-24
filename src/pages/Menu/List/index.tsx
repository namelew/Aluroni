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

    useEffect(() => {
        const newList = itens.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(newList);
    }, [search, filter]);

    return (
        <div className={styles.list}>
            {list.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}

export default List;