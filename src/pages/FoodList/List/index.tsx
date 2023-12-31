import { useEffect, useState } from 'react';
import Item from './Item';
import styles from './List.module.scss';
import itens from 'data/bill-of-fare.json';
import { Menu, Dish } from 'types/dish';

interface Props {
    search: string,
    filter: number | null,
    sorter: string,
}

const List = ( { search, filter, sorter } : Props) => {
    const [list, setList] = useState<Menu>(itens);

    const crescent = (
        newList: Menu,
        prop: keyof Pick<Dish, 'size' | 'serving' | 'price'>
    ) => {
        return newList.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
    };

    const testSearch = (title: string) => {
        const regex = RegExp(search, 'i');
        return regex.test(title);
    };

    const testFilter = (id: number) => {
        return  filter === null || filter === id;
    };

    const sort = (newList : Menu) => {
        switch (sorter) {
        case 'porcao': 
            return crescent(newList, 'size');
        case 'qtd_pessoas':
            return crescent(newList, 'serving');
        case 'preco':
            return crescent(newList, 'price');
        default:
            return newList;
        }
    };

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
    );
};

export default List;