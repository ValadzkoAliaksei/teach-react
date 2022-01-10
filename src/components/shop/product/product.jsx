import React from "react";

import style from "./product.module.css";

const INITIAL_STATE = { value: "0", sumCost: "0" };

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.onBuy = this.onBuy.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      sumCost: +e.target.value * this.props.product.cost,
    });
  }

  onBuy() {
    this.props.handleBuy(
      this.props.product.id,
      +this.state.value,
      +this.state.sumCost
    );
    this.setState(INITIAL_STATE);
  }

  render() {
    return (
      <div className={style.product}>
        <div>
          Товар: <>{this.props.product.title}</>
        </div>
        <div>
          Марка: <>{this.props.product.description}</>
        </div>
        <img src={this.props.product.imgSrc} width={300} alt="foto" />
        <div>
          Стоимость: <>{this.props.product.cost}евро.</>
        </div>
        <input
          type="number"
          name={this.props.product.id}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>
          Общая стоимость: <>{this.state.sumCost}евро.</>
        </div>
        <button onClick={this.onBuy}>Купить</button>
      </div>
    );
  }
}
