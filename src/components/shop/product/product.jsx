import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './product.module.css';

const INITIAL_STATE = { value: '0', sumCost: '0' };

export const Product = ({ product: { cost, id: productId, title, description, imgSrc }, handleBuy }) => {
  const [{ value, sumCost }, setProductOfBuy] = useState(INITIAL_STATE);
  const [isDisable, setIsDisable] = useState(false);

  const handleChange = (e) => {
    if (+e.target.value >= 0) {
      setProductOfBuy({
        value: +e.target.value,
        sumCost: +e.target.value * cost,
      });
    }
  };

  const onBuy = () => {
    handleBuy(productId, +value, +sumCost);
    setProductOfBuy(INITIAL_STATE);
  };

  useEffect(() => {
    if (value === '0') {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [value]);

  return (
    <div className={style.product}>
      <div>Товар: {title}</div>
      <div>Марка: {description}</div>
      <img src={imgSrc} width={300} alt="foto" />
      <div>Стоимость: {cost}евро.</div>
      <input type="number" name={productId} value={value} onChange={handleChange} />
      <div>Общая стоимость: {sumCost}евро.</div>
      <button onClick={onBuy} type="button" disabled={isDisable} ref={buttonRef}>
        Купить
      </button>
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
