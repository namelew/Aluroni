import React from 'react';
import classNames from 'classnames';
import styles from './Filters.module.scss';
import filters from './filters.json';

type IOption = typeof filters[0];

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>,
}

const Filters = ( { filter, setFilter } : Props) => {
  const selectFilter = ( option : IOption) => {
    return filter === option.id ? setFilter(null) : setFilter(option.id);
  };

  return (
    <div className={styles.filters}>
      { filters.map( option => (
        <button 
          className={classNames({
            [styles.filters__filter]: true,
            [styles['filters__filter--active']]: filter === option.id,
          })} 
          key={option.id}
          onClick={() => selectFilter(option)}
        > 
          {option.label}
        </button>)
      ) 
      }
    </div>
  );
};

export default Filters;