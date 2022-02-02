import { useReducer } from 'react';

import { Cart } from './cart';
import { Product } from './product';

import { productsReducer } from '../../store/products-state';
import { initialProductsState } from '../../store/products-state/initial-state';
import { buyProducts, clearProducts } from '../../store/products-state/actions';

import { products } from '../../constants/products';

import style from './shop.module.css';

export const Shop = () => {
  const [state, dispatch] = useReducer(productsReducer, initialProductsState);

  const handleBuy = (productId, value, sumCost) => {
    dispatch(buyProducts({ productId, value, sumCost }));
  };

  const clearState = () => {
    dispatch(clearProducts());
  };

  return (
    <div className={style.shop}>
      {products.map((product) => (
        <Product product={product} key={product.key} handleBuy={handleBuy} />
      ))}
      <Cart clearState={clearState} products={state} />
    </div>
  );
};
