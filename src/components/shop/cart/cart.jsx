import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../modal';
import { Watch } from '../watch';

import style from './cart.module.css';

const SuccessMessage = () => <div>Покупка совершена успешно!</div>;

const DeniedMessage = () => <div>Недостаточно денег!</div>;

export const Cart = ({ products: { tv, fridge, washingMashine, sum }, clearState }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const checkCash = () => {
    if (sum < 3000) {
      clearState();
    }
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

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

      <button onClick={checkCash} type="button">
        Рассчитаться
      </button>
      {isModalVisible && <Modal closeModal={closeModal}>{sum > 3000 ? <DeniedMessage /> : <SuccessMessage />}</Modal>}
    </div>
  );
};

Cart.propTypes = {
  clearState: PropTypes.func.isRequired,
  products: PropTypes.shape({
    tv: PropTypes.shape({
      value: PropTypes.number,
      sumCost: PropTypes.number,
    }),
    fridge: PropTypes.shape({
      value: PropTypes.number,
      sumCost: PropTypes.number,
    }),
    washingMashine: PropTypes.shape({
      value: PropTypes.number,
      sumCost: PropTypes.number,
    }),
    sum: PropTypes.number,
  }).isRequired,
};
