import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { Cart } from './cart';
import { Product } from './product';

import { buyProducts, clearProducts } from '../../store/products-state';
import { getStorageRequest } from '../../store/storage-state2';

import { products } from '../../constants/products';

import style from './shop.module.css';
import { storageSelector } from '../../selectors';

export const Shop = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector(storageSelector);

  const handleBuy = (productId, value, sumCost) => {
    dispatch(buyProducts({ productId, value, sumCost }));
  };

  const clearState = () => {
    dispatch(clearProducts());
  };

  useEffect(() => {
    dispatch(getStorageRequest());
  }, []);

  return !isLoading ? (
    <div className={style.shop}>
      {products.map((product) => (
        <Product product={product} key={product.key} handleBuy={handleBuy} />
      ))}
      <Cart clearState={clearState} />
    </div>
  ) : (
    <div>Загрузка</div>
  );
};
