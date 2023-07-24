import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import styles from './Sorter.module.scss';
import options from './options.json';


export type SortOptions = '' | 'porcao' | 'qtd_pessoas' | 'preco';

interface Props {
    sorter: SortOptions,
    setSorter: React.Dispatch<React.SetStateAction<SortOptions>>,
}

const Sorter = ( { sorter, setSorter } : Props) => {
    const [open, setOpen] = useState(false);
    const sorterName = sorter && options.find(option => option.value == sorter)?.name

    return (
        <button
            className={classNames({
                [styles.sorter]: true,
                [styles["sorter--active"]]: sorter !== "",
            })}
            onClick={ _ => setOpen(!open) }
            onBlur={ _ => setOpen(false) }
        >
            <span>{sorterName || "Ordenar Por"}</span>
            {open ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
            <div className={classNames({
                [styles.sorter__options]: true,
                [styles['sorter__options--active']]: open,
            })}>
                {options.map(option => (
                    <div
                        className={styles.sorter__option}
                        key={option.value}
                        onClick={ _ => setSorter(option.value as SortOptions) }
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Sorter;