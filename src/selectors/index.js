export const productsSelector = (state) => state.productsReducer;

export const selectedProductsSelector = (state, productId) => state.selectProductsReducer[productId];
