import { useState } from 'react';
import { Button, Modal } from 'antd';

import { useAppSelector } from 'utils/hooks';
import { Watch } from '../watch';
import { Deal } from '../deal';

import { productsSelector } from '../../../selectors';

import style from './cart.module.css';

type CartPropsType = {
  clearState: () => void;
};

const DeniedMessage = () => <div>Недостаточно денег!</div>;

export const Cart = ({ clearState }: CartPropsType) => {
  const { tv, fridge, washingMashine, sum } = useAppSelector(productsSelector);
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

      <Button onClick={checkCash} type="primary" disabled={sum === 0}>
        Рассчитаться
      </Button>
      <Modal visible={isModalVisible} onCancel={closeModal} footer={null}>
        {sum > 3000 ? <DeniedMessage /> : <Deal closeModal={closeModal} />}
      </Modal>
    </div>
  );
};
