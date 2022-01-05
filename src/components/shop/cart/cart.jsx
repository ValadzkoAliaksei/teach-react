import React from "react";

import style from "./cart.module.css";

export class Cart extends React.Component {
  checkCash = (sum) => {
    console.log(sum);
  };
  render() {
    const sum =
      this.props.products.washingMashine.sumCost +
      this.props.products.fridge.sumCost +
      this.props.products.tv.sumCost;
    return (
      <div>
        <div>
          <div>{`Телевизоров: ${this.props.products.tv.value}штук`}</div>
          <div>{`На стоимость: ${this.props.products.tv.sumCost}евро`}</div>
        </div>
        <br />
        <div>
          <div>{`Холодильников: ${this.props.products.fridge.value}штук`}</div>
          <div>{`На стоимость: ${this.props.products.fridge.sumCost}евро`}</div>
        </div>
        <br />
        <div>
          <div>{`Стиральных машин: ${this.props.products.washingMashine.value}штук`}</div>
          <div>{`На стоимость: ${this.props.products.washingMashine.sumCost}евро`}</div>
        </div>
        <br />
        <div>
          Всего:
          <span>
            {sum}
            евро
          </span>
        </div>

        <button onClick={() => this.checkCash(sum)}>Рассчитаться</button>
      </div>
    );
  }
}
