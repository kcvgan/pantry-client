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
  products: Products;
  filteredProducts: Products;
};

const initialState: PantryContainerState = { products: [], filteredProducts: [] };

class PantryContainer extends Component<PantryContainerProps, PantryContainerState> {
  constructor(props: PantryContainerProps) {
    super(props);
  }

  public static defaultProps = {
    products: []
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
        this.setState({
          products: value,
          filteredProducts: value
        })
      });
  };

  onSearch = (text: string) => {
    const { products } = this.state;
    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(text)
    });
    this.setState({ ...this.state, filteredProducts: filteredProducts });
  }

  public render() {
    return (
      <>
        <SearchBar onSearch={this.onSearch} />
        <FoodList products={this.props.products} />
      </>
    )
  }
};

const mapStateToProps = ({ products }: State): PantryContainerProps => ({
  products: products.products
});

export default connect(mapStateToProps)(PantryContainer);