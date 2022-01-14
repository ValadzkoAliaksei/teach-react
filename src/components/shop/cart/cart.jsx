import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../modal';
import { Watch } from '../watch';

import style from './cart.module.css';

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
    const { products, clearState } = this.props;
    if (products.sum < 3000) {
      clearState();
    }
    this.setState({ isModalVisible: true });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const {
      products: { tv, fridge, washingMashine, sum },
      clearState,
    } = this.props;
    const { isModalVisible } = this.state;
    return (
      <div>
        <Watch clearState={clearState} />
        <div>
          <div>{`Телевизоров: ${tv.value}штук`}</div>
          <div>{`На стоимость: ${tv.sumCost}евро`}</div>
        </div>
        <br />
        <div>
          <div>{`Холодильников: ${fridge.value}штук`}</div>
          <div>{`На стоимость: ${fridge.sumCost}евро`}</div>
        </div>
        <br />
        <div>
          <div>{`Стиральных машин: ${washingMashine.value}штук`}</div>
          <div>{`На стоимость: ${washingMashine.sumCost}евро`}</div>
        </div>
        <br />
        <div>
          Всего:
          <span>
            {sum}
            евро
          </span>
        </div>

        <button onClick={this.checkCash} type="button">
          Рассчитаться
        </button>
        {isModalVisible && (
          <Modal closeModal={this.closeModal}>{sum > 3000 ? <DeniedMessage /> : <SuccessMessage />}</Modal>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  clearState: PropTypes.func.isRequired,
  products: PropTypes.shape({
    tv: PropTypes.shape({
      value: PropTypes.number,
      sumCost: PropTypes.number,
    }),
    fridge: PropTypes.shape({
      value: PropTypes.number,
      sumCost: PropTypes.number.isRequired,
    }),
    washingMashine: PropTypes.shape({
      value: PropTypes.number,
      sumCost: PropTypes.number,
    }),
    sum: PropTypes.number,
  }).isRequired,
};
