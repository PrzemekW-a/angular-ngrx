import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { ProductsApiActions, ProductsPageActions } from '../actions/products-api.actions';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() => {
    const actions$ = inject(Actions);
    const productsService = inject(ProductsService);

    return actions$.pipe(
      ofType(ProductsPageActions.loadProducts),
      switchMap(() =>
        productsService.getProducts().pipe(
          map((products: Product[]) => ProductsApiActions.loadProductsSuccess({ products })),
          catchError(error =>
            of(ProductsApiActions.loadProductsFailure({ error: error?.message || 'Unknown API error' }))
          )
        )
      )
    );
  });
}
