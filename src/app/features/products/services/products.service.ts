import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Observable<Product[]> {
    const mockProducts: Product[] = [
      { id: 1, name: 'Laptop', price: 4500, description: 'This is a laptop' },
      { id: 2, name: 'Mouse', price: 120 },
      { id: 3, name: 'Keyboard', price: 250, description: 'This is a keyboard' },
    ];
    return of(mockProducts).pipe(delay(1000));
  }
}
