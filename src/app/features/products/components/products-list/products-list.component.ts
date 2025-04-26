import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import {
  selectAllProducts, selectCurrentProduct,
  selectProductsError,
  selectProductsLoading
} from '../../store/selectors/products.selectors';
import { ProductsPageActions } from '../../store/actions/products-api.actions';

@Component({
  selector: 'app-products-list',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    JsonPipe,
    NgIf,
    NgForOf
  ],
  template: `
    <h2>Products</h2>

    <div *ngIf="loading$ | async">Loading products...</div>

    <div *ngIf="error$ | async as error" style="color: red;">
      Error loading products: {{ error }}
    </div>

    <ul *ngIf="products$ | async as products">
      <li *ngFor="let product of products" (click)="selectProduct(product.id)">
        {{ product.name }} - {{ product.price | currency:'PLN' }}
        <span *ngIf="(selectedProduct$ | async)?.id === product.id"> (Selected)</span>
      </li>
    </ul>

    <button (click)="loadProducts()">Reload Products</button>
    <button (click)="clearSelection()" [disabled]="!(selectedProduct$ | async)">Clear Selection</button>

    <div *ngIf="selectedProduct$ | async as selected">
      <h3>Selected Product Details:</h3>
      <pre>{{ selected | json }}</pre>
    </div>
  `,
  styles: [`
    li {
      cursor: pointer;
      margin-bottom: 5px;
    }

    li:hover {
      background-color: #eee;
    }
  `],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  selectedProduct$: Observable<Product | undefined | null>;

  constructor(private store: Store) {
    console.log('ProductsListComponent: Initializing...');
    this.products$ = this.store.select(selectAllProducts);
    this.loading$ = this.store.select(selectProductsLoading);
    this.error$ = this.store.select(selectProductsError);
    this.selectedProduct$ = this.store.select(selectCurrentProduct);
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.store.dispatch(ProductsPageActions.loadProducts());
  }

  selectProduct(productId: number): void {
    this.store.dispatch(ProductsPageActions.selectProduct({ productId }));
  }

  clearSelection(): void {
    this.store.dispatch(ProductsPageActions.clearSelection());
  }
}
