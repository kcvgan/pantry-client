import React, { Component } from 'react';
import './PantryContainer.css';
import FoodList from './foodList/FoodList';
import * as productService from '../../../services/product.service';
import { Products } from '../../../models/product.model';

export interface PantryContainerState {
  products: Products;
};

const initialState: PantryContainerState = { products: [] };

class PantryContainer extends Component {
  state: PantryContainerState = initialState;

  componentDidMount() {
    productService.getAllProducts()
      .then((products: Products) => {
        this.setState({products: products})
      });
  };

  public render() {
    return (
      <>
        <FoodList products={this.state.products}></FoodList>
      </>
    )
  }
};

export default PantryContainer;