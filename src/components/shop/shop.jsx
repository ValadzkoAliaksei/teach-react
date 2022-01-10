import React from 'react';

import { Cart } from './cart';
import { Product } from './product';

import { products } from '../../constants/products';

import style from './shop.module.css';

const INITIAL_STATE = {
  tv: { value: 0, sumCost: 0 },
  fridge: { value: 0, sumCost: 0 },
  washingMashine: { value: 0, sumCost: 0 },
  sum: 0,
};

export class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleBuy = this.handleBuy.bind(this);
  }

  handleBuy(productId, value, sumCost) {
    this.setState((prevState) => ({
      [productId]: {
        value: prevState[productId].value + value,
        sumCost: prevState[productId].sumCost + sumCost,
      },
      sum: prevState.sum + sumCost,
    }));
  }

  clearState = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    // throw new Error("hah");
    return (
      <div className={style.shop}>
        {products.map((product) => (
          <Product product={product} key={product.key} handleChange={this.handleChange} handleBuy={this.handleBuy} />
        ))}
        <Cart clearState={this.clearState} products={this.state} />
      </div>
    );
  }
}
