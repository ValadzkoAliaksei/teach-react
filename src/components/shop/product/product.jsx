import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Image, InputNumber } from 'antd';

import { clearProduct, selectProduct } from '../../../store/select-products-state';

import style from './product.module.css';
import { selectedProductsSelector } from '../../../selectors';

export const Product = ({ product: { cost, id: productId, title, description, imgSrc }, handleBuy }) => {
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(false);

  const { value: valueState, sumCost } = useSelector((state) => selectedProductsSelector(state, productId));

  const handleChange = (value) => {
    setIsDisable(true);
    dispatch(selectProduct({ value, sumCost: value * cost, productId }));
  };

  const onBuy = () => {
    handleBuy(productId, +valueState, +sumCost);
    dispatch(clearProduct());
  };

  useEffect(() => {
    if (valueState === 0) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [valueState]);

  return (
    <div className={style.product}>
      <div>Товар: {title}</div>
      <div>Марка: {description}</div>
      <Image width={200} src={imgSrc} />
      <div>Стоимость: {cost}евро.</div>
      <InputNumber min={0} onChange={handleChange} defaultValue={0} value={valueState} addonAfter="шт." />
      <div>Общая стоимость: {sumCost}евро.</div>
      <Button onClick={onBuy} disabled={isDisable}>
        Купить
      </Button>
    </div>
  );
};

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
