import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = '/api/products';

  constructor(private http: HttpClient) {
    console.log('--- ProductsService CONSTRUCTOR EXECUTED ---');
    if (!http) {
      console.error("!!! HttpClient NOT injected into ProductsService !!!");
    }
  }

  getProducts(): Observable<Product[]> {
    console.log('ProductsService: Fetching mock products...');
    const mockProducts: Product[] = [
      { id: 1, name: 'Laptop', price: 4500 },
      { id: 2, name: 'Myszka', price: 120 },
      { id: 3, name: 'Klawiatura', price: 250 },
    ];
    return of(mockProducts).pipe(delay(1000));
  }
}
