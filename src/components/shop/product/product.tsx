import { useEffect, useState } from 'react';
import { Button, Image, InputNumber } from 'antd';

import type { ProductsType } from 'types/products-type';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { clearProduct, selectProduct } from '../../../store/select-products-state';

import { selectedProductsSelector } from '../../../selectors';

import style from './product.module.css';

type ProductPropType = {
  handleBuy: (productId: string, valueState: number, sumCost: number) => void;
  product: ProductsType;
};

export const Product = ({
  product: { cost, id: productId, title, description, imgSrc },
  handleBuy,
}: ProductPropType): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isDisable, setIsDisable] = useState(false);

  const { value: valueState, sumCost } = useAppSelector((state) => selectedProductsSelector(state, productId));

  const handleChange = (value: number) => {
    setIsDisable(true);
    dispatch(selectProduct({ value, sumCost: value * cost, productId }));
  };

  const onBuy = () => {
    handleBuy(productId, valueState, sumCost);
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
