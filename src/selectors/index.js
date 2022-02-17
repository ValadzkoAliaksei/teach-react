export const productsSelector = (state) => state.productsReducer;

export const selectedProductsSelector = (state, productId) => state.selectProductsReducer[productId];

export const storageSelector = (state) => state.storageReducer;
