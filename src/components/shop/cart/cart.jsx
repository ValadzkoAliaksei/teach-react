import React from "react";

import { Modal } from "../../modal";

import style from "./cart.module.css";

const SuccessMessage = () => <div>Покупка совершена успешно!</div>;

const DeniedMessage = () => <div>Недостаточно денег!</div>;
export class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
    };
  }

  checkCash = () => {
    if (this.props.products.sum < 3000) {
      this.props.clearState();
    }
    this.setState({ isModalVisible: true });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
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
            {this.props.products.sum}
            евро
          </span>
        </div>

        <button onClick={this.checkCash}>Рассчитаться</button>
        {this.state.isModalVisible && (
          <Modal closeModal={this.closeModal}>
            {this.props.products.sum > 3000 ? (
              <DeniedMessage />
            ) : (
              <SuccessMessage />
            )}
          </Modal>
        )}
      </div>
    );
  }
}
