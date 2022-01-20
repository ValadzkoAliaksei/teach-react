import { useState } from 'react';

import { Cart } from './cart';
import { Product } from './product';

import { products } from '../../constants/products';

import style from './shop.module.css';

const INITIAL_STATE = {
  tv: { value: 0, sumCost: 0 },
  fridge: { value: 0, sumCost: 0 },
  washingMashine: { value: 0, sumCost: 0 },
  sum: 0,
};

export const Shop = () => {
  const [productsOfBuy, setProductsOfBuy] = useState(INITIAL_STATE);

  const handleBuy = (productId, value, sumCost) => {
    setProductsOfBuy((prevState) => ({
      ...prevState,
      [productId]: {
        value: prevState[productId].value + value,
        sumCost: prevState[productId].sumCost + sumCost,
      },
      sum: prevState.sum + sumCost,
    }));
  };

  const clearState = () => {
    setProductsOfBuy(INITIAL_STATE);
  };

  return (
    <div className={style.shop}>
      {products.map((product) => (
        <Product product={product} key={product.key} handleBuy={handleBuy} />
      ))}
      <Cart clearState={clearState} products={productsOfBuy} />
    </div>
  );
};
