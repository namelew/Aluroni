import React from 'react';
import styles from './Searcher.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Searcher = ( { search, setSearch } : Props) => {
  return (
    <div className={styles.searcher}>
      <input 
        value={search}
        onChange={( event ) => { setSearch(event.target.value); }}
        placeholder='Buscar'
      />
      <CgSearch size={20} color='#4D4D5E'/>
    </div>
  );
};

export default Searcher;