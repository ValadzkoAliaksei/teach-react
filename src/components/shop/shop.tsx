import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { Cart } from './cart';
import { Product } from './product';

import { buyProducts, clearProducts } from '../../store/products-state';
import { getStorageRequest } from '../../store/storage2-state';
import { storageSelector } from '../../selectors';

import { products } from '../../constants/products';

import style from './shop.module.css';

export const Shop = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, data } = useAppSelector(storageSelector);

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
