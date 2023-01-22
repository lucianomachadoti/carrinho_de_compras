import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productList: Array<Product> = [];

  getAllProducts(): Array<Product> {
    return (this.productList = [
      { id: 1, name: 'Sabão', price: 2.35 } as Product,
      { id: 2, name: 'Agua', price: 3.76 } as Product,
      { id: 3, name: 'Papel', price: 7.81 } as Product,
    ]);
  }
}
