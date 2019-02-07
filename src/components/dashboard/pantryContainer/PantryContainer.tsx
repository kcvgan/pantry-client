import React, { Component } from 'react';
import './PantryContainer.css';
import FoodList from './foodList/FoodList';
import * as productService from '../../../services/product.service';
import Product, { Products } from '../../../models/product.model';
import SearchBar from './searchBar/SearchBar';
import { string } from 'prop-types';

export interface PantryContainerState {
  products: Products;
  filteredProducts: Products;
};

const initialState: PantryContainerState = { products: [], filteredProducts: [] };
const mockProduct: Product =     {
  _id: 1,
  name: 'Tomato',
  type: 'veg',
  quantity: '1',
  unit: 'whole',
};

const mockState: PantryContainerState = {
  products: [
    mockProduct,
  ],
  filteredProducts: [mockProduct]
};

class PantryContainer extends Component {
  state: PantryContainerState = mockState;

  componentDidMount() {
    productService.getAllProducts()
      .then((products: Products) => {
        this.setState({products: products, filteredProducts: products})
      });
  };

  onSearch = (text: string) => {
    const { products } = this.state;
    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(text)
    });
    this.setState({products: products, filteredProducts: filteredProducts});
  }

  public render() {
    return (
      <>
        <SearchBar onSearch={this.onSearch}/>
        <FoodList products={this.state.filteredProducts}/>
      </>
    )
  }
};

export default PantryContainer;