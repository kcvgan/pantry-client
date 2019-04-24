import React, { Component } from 'react';
import './PantryContainer.css';
import FoodList from './foodList/FoodList';
import * as productService from '../../../services/product.service';
import { Products } from '../../../models/product.model';
import SearchBar from './searchBar/SearchBar';
import { Dispatch } from 'redux';
import { State } from '../../../redux/reducers/root.reducer';
import { connect } from 'react-redux';
import { ActionTypes, Action } from '../../../redux/actions/product.actions';

export interface PantryContainerProps {
  products: Products
  dispatch?: Dispatch
};

export interface PantryContainerState {
  searchTerm: string;
};

const initialState: PantryContainerState = { searchTerm: '' };

class PantryContainer extends Component<PantryContainerProps, PantryContainerState> {
  constructor(props: PantryContainerProps) {
    super(props);
  }

  static defaultProps: PantryContainerProps = {
    products: [],
  }

  state: PantryContainerState = initialState;

  componentDidMount() {
    const { dispatch } = this.props;
    productService.getAllProducts()
      .then((value: Products) => {
        const productsAction: Action = {
          type: ActionTypes.STORE_PRODUCTS,
          payload: {
            products: value
          }
        };
        if (dispatch) {
          dispatch(productsAction)
        };
      });
  };

  onSearch = (text: string) => {
    this.setState({ ...this.state, searchTerm: text });
  }

  filterProducts = (products: Products, text: string): Products => {
    return products.filter(product => { return product.name.toLowerCase().includes(text) })
  }

  public render() {
    const { products } = this.props;
    const { searchTerm } = this.state;
    return (
      <>
        <SearchBar onSearch={this.onSearch} />
        <FoodList products={this.filterProducts(products, searchTerm)} />
      </>
    )
  }
};

const mapStateToProps = ({ products }: State): PantryContainerProps => ({
  products: products.products
});

export default connect(mapStateToProps)(PantryContainer);