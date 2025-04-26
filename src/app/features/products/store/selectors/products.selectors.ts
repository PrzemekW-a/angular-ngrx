import { productsFeatureKey } from '../reducers/products.reducer';
import { ProductsState } from '../state/products.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loading
)

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
)

export const selectCurrentProductId = createSelector(
  selectProductsState,
  (state: ProductsState) => state.selectedProductId
)

export const selectCurrentProduct = createSelector(
  selectAllProducts,
  selectCurrentProductId,
  (products, selectedId) =>
    selectedId ? products.find(product => product.id === selectedId) : null
)
