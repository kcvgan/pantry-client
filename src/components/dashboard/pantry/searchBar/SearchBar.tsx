import React, { useState, ChangeEvent } from 'react';
import './SearchBar.css';
import AddProduct from './AddProduct';
import Product from '../../../../models/product.model';
import * as productService from '../../../../services/product.service';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionTypes } from '../../../../redux/actions/product.actions';

export interface SearchBarProps {
  onSearch: (text: string) => any
  dispatch?: Dispatch;
}

const SearchBar = (props: SearchBarProps) => {
  const [text, setText] = useState('');
  const [isAddMenuOpen, setAddMenuOpen] = useState(false);
  const [isProductBeingAdded, setProductBeingAdded] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    props.onSearch(event.target.value);
  }

  const onSearchClick = () => {
    props.onSearch(text);
  }

  const onAddClick = () => {
    setAddMenuOpen(true);
  }

  const addProduct = (product: Product) => {
    setProductBeingAdded(true);
    productService.addProduct(product)
      .then(responseProduct => {
        setProductBeingAdded(false);
        const addProduct = {
          type: ActionTypes.ADD_PRODUCT,
          payload: {
            product: responseProduct
          }
        };
        if (props.dispatch) {
          props.dispatch(addProduct)
        };
      })
      .catch(error => {
        console.log(error)
      })
  }

  const renderAddButton = (isMenuOpen: boolean, onAddClick: Function) => {
    if (isMenuOpen) {
      return (
        <AddProduct setAddMenuOpen={setAddMenuOpen} addProduct={addProduct} isAddingProduct={isProductBeingAdded} />
      )
    } else {
      return <button onClick={() => setAddMenuOpen(true)} className={'addButton'}><i className={'fa fa-plus fa-2x'} /></button>;
    };
  };

  return (
    <div className={'searchWrapper'}>
      <div className={'searchBar'}>
        <input onChange={onChange} className={'inputSearch'} type="text" placeholder="Search pantry" />
      </div>
      <button onClick={onSearchClick} className={'searchButton'}><i className={'fa fa-search fa-2x'} />
      </button>
      {renderAddButton(isAddMenuOpen, onAddClick)}
    </div>
  )
};

export default connect()(SearchBar);