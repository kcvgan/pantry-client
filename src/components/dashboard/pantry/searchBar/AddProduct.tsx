import React, { useState, ChangeEvent } from 'react';
import Product from '../../../../models/product.model';
import './AddProduct.css';
import Spinner from '../../../utilComponents/spinner';

export interface AddProductProps {
  setAddMenuOpen(isOpen: boolean): void;
  addProduct(product: Product): void;
  isAddingProduct?: boolean;
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
  
  const productIsBeingAdded = (props: AddProductProps) => {
    if (props.isAddingProduct) {
      return <Spinner />
    } else {
      return <i className={'fa fa-plus fa-2x'} />
    }
  }

  const onClickAddProduct = () => {
    addProduct(product);
    setProduct(initialState);
  }

  const { setAddMenuOpen, addProduct } = props;

  return (
    <div className={'addProduct'}>
      <input onChange={onChange} className={'input type'} name="type" type="text" placeholder="type" />
      <input onChange={onChange} className={'input name'} name="name" type="text" placeholder="name" />
      <input onChange={onChange} className={'input quantity'} name="quantity" type="text" placeholder="quantity"/>
      <input onChange={onChange} className={'input unit'} name="unit" type="text" placeholder="unit"/>
      <button onClick={onClickAddProduct} className={'addButton'}>
        {productIsBeingAdded(props)}
      </button>
      <button onClick={() => setAddMenuOpen(false)} className={'addButton'}>
        <i className={'fa fa-trash fa-2x'} />
      </button>
    </div>)
}

export default AddProduct;