import React from 'react';
import './FoodItem.css';
import { Product } from '../../../../../models/product.model';

export interface FoodItemProps {
  product: Product;
}

const FoodItem = (props: FoodItemProps) => {
  
  const { product } = props;

  return (
    <>
      <span>{product.name}</span><br/>
    </>
  );
};

export default FoodItem;