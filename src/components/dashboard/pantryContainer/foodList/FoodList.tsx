import React from 'react';
import './FoodList.css';
import { Products } from '../../../../models/product.model';
import FoodItem from './foodItem/FoodItem';

export interface FoodListProps {
  products: Products;
}

const FoodList = (props: FoodListProps) => {

  const { products } = props;

  const renderProducts = (products: Products) => {
    return products.map(product => <FoodItem product={product}/>);
  };

  return (
    <>
      {renderProducts(products)}
    </>
  )
}

export default FoodList;