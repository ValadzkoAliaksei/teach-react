import { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import { productItemReducer } from '../../../store/product-item-state';
import { initialProductItemState } from '../../../store/product-item-state/initial-state';
import { clearProduct, selectProduct } from '../../../store/product-item-state/actions';

import style from './product.module.css';

export const Product = ({ product: { cost, id: productId, title, description, imgSrc }, handleBuy }) => {
  const [{ value, sumCost }, dispatch] = useReducer(productItemReducer, initialProductItemState);
  const [isDisable, setIsDisable] = useState(false);

  const handleChange = (e) => {
    setIsDisable(true);
    if (+e.target.value >= 0) {
      dispatch(selectProduct({ value: +e.target.value, sumCost: +e.target.value * cost }));
    }
  };

  const onBuy = () => {
    handleBuy(productId, +value, +sumCost);
    dispatch(clearProduct());
  };

  useEffect(() => {
    if (value === 0) {
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
      <button onClick={onBuy} type="button" disabled={isDisable}>
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
