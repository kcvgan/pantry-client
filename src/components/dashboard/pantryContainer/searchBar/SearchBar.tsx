import React, { useState, ChangeEvent } from 'react';
import './SearchBar.css';

export interface SearchBarProps {
  onSearch: (text: string) => any
}

const SearchBar = (props: SearchBarProps) => {
  const [text, setText] = useState('');
  const [isAddMenuOpen, setAddMenuOpen] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const onSearchClick = () => {
    props.onSearch(text);
  }

  const onAddClick = () => {
    setAddMenuOpen(true);
  }

  const renderAddButton = (isMenuOpen: boolean, onAddClick: Function) => {
    console.log(isAddMenuOpen);
    if(isMenuOpen) {
      return (
        <>
        <div className={'searchBar'}>
          <input onChange={onChange} className={'inputSearch'} type="text" placeholder="Add product"/>
        </div>
        <button onClick={() => setAddMenuOpen(true)} className={'addButton'}>
          <i className={'fa fa-plus fa-2x'}/>
        </button>
        <button onClick={() => setAddMenuOpen(false)} className={'addButton'}>
          <i className={'fa fa-trash fa-2x'}/>
        </button>
      </>
      )
    } else {
      return <button onClick={() => setAddMenuOpen(true)} className={'addButton'}><i className={'fa fa-plus fa-2x'}/></button>;
    };
  };

  return (
    <div className={'searchWrapper'}>
      <div className={'searchBar'}>
        <input onChange={onChange} className={'inputSearch'} type="text" placeholder="Search pantry"/>
      </div>
      <button onClick={onSearchClick} className={'searchButton'}><i className={'fa fa-search fa-2x'}/>
      </button>
      {renderAddButton(isAddMenuOpen, onAddClick)}
    </div>
  )
};

export default SearchBar;