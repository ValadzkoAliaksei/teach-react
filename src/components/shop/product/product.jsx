import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { clearProduct, selectProduct } from '../../../store/select-products-state';

import style from './product.module.css';
import { selectedProductsSelector } from '../../../selectors';

export const Product = ({ product: { cost, id: productId, title, description, imgSrc }, handleBuy }) => {
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(false);

  const { value, sumCost } = useSelector((state) => selectedProductsSelector(state, productId));

  const handleChange = (e) => {
    setIsDisable(true);
    if (+e.target.value >= 0) {
      dispatch(selectProduct({ value: +e.target.value, sumCost: +e.target.value * cost, productId }));
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
