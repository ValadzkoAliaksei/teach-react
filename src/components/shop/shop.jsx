import { useReducer } from 'react';
import { initialState, reducer } from '../../store/products';

import { Cart } from './cart';
import { Product } from './product';

import { products } from '../../constants/products';

import style from './shop.module.css';

export const Shop = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={style.shop}>
      {products.map((product) => (
        <Product product={product} key={product.key} dispatch={dispatch} />
      ))}
      <Cart dispatch={dispatch} products={state} />
    </div>
  );
};
