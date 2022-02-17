import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Cart } from './cart';
import { Product } from './product';

import { buyProducts, clearProducts } from '../../store/products-state';
import { getStorage } from '../../store/storage-state/thunk';

import { products } from '../../constants/products';

import style from './shop.module.css';

export const Shop = () => {
  const dispatch = useDispatch();

  const handleBuy = (productId, value, sumCost) => {
    dispatch(buyProducts({ productId, value, sumCost }));
  };

  const clearState = () => {
    dispatch(clearProducts());
  };

  useEffect(() => {
    dispatch(getStorage());
  }, []);

  return (
    <div className={style.shop}>
      {products.map((product) => (
        <Product product={product} key={product.key} handleBuy={handleBuy} />
      ))}
      <Cart clearState={clearState} />
    </div>
  );
};
