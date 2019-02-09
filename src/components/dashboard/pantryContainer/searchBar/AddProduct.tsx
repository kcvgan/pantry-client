import React, { useState, ChangeEvent } from 'react';
import Product from '../../../../models/product.model';
import './AddProduct.css';

export interface AddProductProps {
  setAddMenuOpen(isOpen: boolean): void;
  addProduct(product: Product): void;
}

const initialState: Product = {
  name: '',
  quantity: '',
  type: '',
  unit: '',
}

const AddProduct = (props: AddProductProps) => {
  const [product, setProduct] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  }

  const { setAddMenuOpen, addProduct } = props;

  return (
    <div className={'addProduct'}>
      <input onChange={onChange} className={'input type'} name="type" type="text" placeholder="type"/>
      <input onChange={onChange} className={'input name'} name="name" type="text" placeholder="name" />
      <input onChange={onChange} className={'input quantity'} name="quantity" type="text" placeholder="quantity"/>
      <input onChange={onChange} className={'input unit'} name="unit" type="text" placeholder="unit"/>
      <button onClick={() => addProduct(product)} className={'addButton'}>
        <i className={'fa fa-plus fa-2x'} />
      </button>
      <button onClick={() => setAddMenuOpen(false)} className={'addButton'}>
        <i className={'fa fa-trash fa-2x'} />
      </button>
    </div>)
}

export default AddProduct;