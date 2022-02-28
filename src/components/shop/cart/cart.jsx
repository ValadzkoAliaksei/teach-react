import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Modal } from '../../modal';
import { Watch } from '../watch';
import { Deal } from '../deal';

import { productsSelector } from '../../../selectors';

import style from './cart.module.css';

const DeniedMessage = () => <div>Недостаточно денег!</div>;

export const Cart = ({ clearState }) => {
  const { tv, fridge, washingMashine, sum } = useSelector(productsSelector);
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

      <button onClick={checkCash} type="button" disabled={sum === 0}>
        Рассчитаться
      </button>
      {isModalVisible && <Modal closeModal={closeModal}>{sum > 3000 ? <DeniedMessage /> : <Deal />}</Modal>}
    </div>
  );
};

Cart.propTypes = {
  clearState: PropTypes.func.isRequired,
};
