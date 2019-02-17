import React from 'react';
import './FoodList.css';
import Product, { Products } from '../../../../models/product.model';
import FoodItem from './foodItem/FoodItem';
import { deleteProduct } from '../../../../services/product.service';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionTypes, DeleteProductAction } from '../../../../redux/actions/product.actions';

export interface FoodListProps {
  products: Products;
  dispatch?: Dispatch;
}

const FoodList = (props: FoodListProps) => {

  const { products, dispatch } = props;

  const onDeleteClick = (product: Product) => {
    deleteProduct(product)
      .then(response => {
        const deleteAction: DeleteProductAction = {
          type: ActionTypes.DELETE_PRODUCT,
          payload: {
            product: product
          }
        }
        if (dispatch) {
          dispatch(deleteAction);
        }
      })
      .catch(error => {
        console.log(error);
      })
  };

  const renderProducts = (products: Products) => {
    return products.map(product => <FoodItem onDeleteClick={onDeleteClick} key={product.id} product={product} />);
  };

  return (
    <div className={'foodList'}>
      {renderProducts(products)}
    </div>
  )
}

export default connect()(FoodList);