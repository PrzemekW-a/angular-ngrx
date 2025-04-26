export interface ProductsState {
  products: any[];
  loading: boolean;
  error: string | null;
  selectedProductId: number | null;
}

export const initialProductsState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  selectedProductId: null
}
