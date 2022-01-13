import React from 'react';
import PropTypes from 'prop-types';

import style from './product.module.css';

const INITIAL_STATE = { value: '0', sumCost: '0' };

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.onBuy = this.onBuy.bind(this);
  }

  handleChange(e) {
    const { product } = this.props;
    this.setState({
      value: e.target.value,
      sumCost: +e.target.value * product.cost,
    });
  }

  onBuy() {
    const { value, sumCost } = this.state;
    const { handleBuy, product } = this.props;
    handleBuy(product.id, +value, +sumCost);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { value, sumCost } = this.state;
    const { product } = this.props;
    return (
      <div className={style.product}>
        <div>Товар: {product.title}</div>
        <div>Марка: {product.description}</div>
        <img src={product.imgSrc} width={300} alt="foto" />
        <div>Стоимость: {product.cost}евро.</div>
        <input type="number" name={product.id} value={value} onChange={this.handleChange} />
        <div>Общая стоимость: {sumCost}евро.</div>
        <button onClick={this.onBuy} type="button">
          Купить
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imgSrc: PropTypes.string,
    cost: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  handleBuy: PropTypes.func.isRequired,
};
