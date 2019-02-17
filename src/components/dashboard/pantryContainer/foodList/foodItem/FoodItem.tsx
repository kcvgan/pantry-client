import React from 'react';
import './FoodItem.css';
import { Product } from '../../../../../models/product.model';

export interface FoodItemProps {
  key?: number;
  product: Product;
  onDeleteClick(product: Product): void;
}

const FoodItem = (props: FoodItemProps) => {

  const { product, onDeleteClick } = props;

  return (
    <div className={'foodItem'}>
      <span className={'productName'}>{product.name}<br></br>
        <span className={'productUnit'}>{product.unit}
        </span>
      </span>
      <div className={'deleteSection'}>
        <span className={'productQuantity'}>{product.quantity} </span>
        <button onClick={() => onDeleteClick(product)} className={'deleteProduct'}>
          <i className={'far fa-trash-alt fa-2x'} />
        </button>
      </div>
    </div>
  );
};

export default FoodItem;