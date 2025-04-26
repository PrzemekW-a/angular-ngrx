import { provideState } from '@ngrx/store';
import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { productsFeatureKey, productsReducer } from './store/reducers/products.reducer';
import { ProductsEffects } from './store/effects/products.effects';
import { ProductsListComponent } from './components/products-list/products-list.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    providers: [
      provideState({ name: productsFeatureKey, reducer: productsReducer }),
      provideEffects([ProductsEffects])
    ]
  }
];
