import { createReducer, on } from '@ngrx/store';
import { initialProductsState, ProductsState } from '../state/products.state';
import { ProductsApiActions, ProductsPageActions } from '../actions/products-api.actions';

export const productsFeatureKey = 'products';

export const productsReducer = createReducer(
  initialProductsState,

  on(ProductsPageActions.loadProducts, (state): ProductsState => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(ProductsApiActions.loadProductsSuccess, (state, { products }): ProductsState => ({
    ...state,
    products,
    loading: false,
  })),

  on(ProductsApiActions.loadProductsFailure, (state, { error }): ProductsState => ({
    ...state,
    loading: false,
    error: error
  })),

  on(ProductsPageActions.selectProduct, (state, { productId }): ProductsState => ({
    ...state,
    selectedProductId: productId,
  })),

  on(ProductsPageActions.clearSelection, (state): ProductsState => ({
    ...state,
    selectedProductId: null,
  }))
)
