import { useDispatch } from 'react-redux';

import { Cart } from './cart';
import { Product } from './product';

import { buyProducts, clearProducts } from '../../store/products-state';

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

  return (
    <div className={style.shop}>
      {products.map((product) => (
        <Product product={product} key={product.key} handleBuy={handleBuy} />
      ))}
      <Cart clearState={clearState} />
    </div>
  );
};
