import React from "react";

import { Cart } from "./cart";
import { Product } from "./product";

import { products } from "../../constants/products";

import style from "./shop.module.css";

export class Shop extends React.Component {
  constructor() {
    super();
    this.state = [
      { name: "tv", number: 0 },
      { name: "fridge", number: 0 },
      { name: "washingMashine", number: 0 },
    ];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, value) {
    const newState = this.state.find((item) => item.name === id);
    newState.number = value;
    this.setState((prevState) => [...prevState, newState]);
  }

  render() {
    console.log(this.state);
    return (
      <div className={style.shop}>
        {products.map((product) => (
          <Product
            product={product}
            key={product.key}
            handleChange={this.handleChange}
          />
        ))}

        <Cart />
      </div>
    );
  }
}
