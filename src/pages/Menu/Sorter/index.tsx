import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import styles from './Sorter.module.scss';
import options from './options.json';

type IOptions = typeof options[0];

const Sorter = () => {
    const [open, setOpen] = useState(false);

    return (
        <button
            className={styles.sorter}
            onClick={ _ => setOpen(!open) }
            onBlur={ _ => setOpen(false) }
        >
            <span>Ordenar por</span>
            {open ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
            <div className={classNames({
                [styles.sorter__options]: true,
                [styles['sorter__options--active']]: open,
            })}>
                {options.map(option => (
                    <div className={styles.sorter__option} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Sorter;