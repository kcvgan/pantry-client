import React from 'react';
import './FoodItem.css';
import { Product } from '../../../../../models/product.model';

export interface FoodItemProps {
  key: number;
  product: Product;
}

const FoodItem = (props: FoodItemProps) => {
  
  const { product } = props;

  return (
    <div className={'foodItem'}>
      <span className={'productName'}>{product.name}<br></br> 
        <span className={'productUnit'}>{product.unit}
        </span>
      </span>
      <span className={'productQuantity'}>{product.quantity} </span>
    </div>
  );
};

export default FoodItem;