import React, { ReactNode, SFC } from 'react';
import './FoodItem.css';
import { Product } from '../../../../../models/product.model';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionTypes } from '../../../../../redux/actions/product.actions';

export interface FoodItemProps {
  key?: number;
  product: Product;
  onDeleteClick(product: Product): void;
  dispatch?: Dispatch;
}

interface ItemQuantityProps {
  quantity: string;
  product: Product;
  dispatch?: Dispatch;
}

const ItemQuantity: SFC<ItemQuantityProps> = (props: ItemQuantityProps) => {
  const { dispatch, product } = props;
  const incrementProduct = (product: Product) => {
    if(dispatch) {
      const incrementAction = {
        type: ActionTypes.INCREMENT_QUANTITY,
        payload: {
          product: product
        }
      }
      dispatch(incrementAction)
    }
  }

  const decrementProduct = (product: Product) =>  {
    if(dispatch) {
      const decrementAction = {
        type: ActionTypes.DECREMENT_QUANTITY,
        payload: {
          product: product
        }
      }
      dispatch(decrementAction)
    }
  }

  return (
    <div className={'itemQuantityContainer'}>
      <div className={'itemQuantityAction'} onClick={() => decrementProduct(product)}>
        <i className={'fa fa-minus-circle'} />
      </div>
      <span className={'quantity'}>{props.quantity}</span>
      <div className={'itemQuantityAction'} onClick={() => incrementProduct(product)}>
        <i className={'fa fa-plus-circle'} />
      </div>
    </div>
  )
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
        <span className={'productQuantity'}><ItemQuantity quantity={product.quantity} product={product} dispatch={props.dispatch}/></span>
        <button onClick={() => onDeleteClick(product)} className={'deleteProduct'}>
          <i className={'far fa-trash-alt fa-2x'} />
        </button>
      </div>
    </div>
  );
};

export default connect()(FoodItem);