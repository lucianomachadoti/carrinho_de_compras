import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Cart, CartProduct } from '../model/cart';
import { Product } from '../model/product';
import { ShopCartService } from './shop-cart.service';

export enum IncDec {
  INC = "inc",
  DEC = "dec"
}

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopChartComponent implements OnInit {

  displayedProductListColumns: string[] = ['id', 'name', 'price', 'actions'];
  productListDS = new MatTableDataSource<Product>();

  displayedCartListColumns: string[] = ['itemNumber', 'productName', 'singleUnitPrice', 'amount', 'totalItemPrice', 'actions'];
  cartProductListDS = new MatTableDataSource<CartProduct>();

  constructor(private service: ShopCartService) { }

  ngOnInit(): void {
    this.productListDS.data = this.service.getAllProducts();
    this.updateCartDataSource();
  }

  addProduct(productToAdd: Product) {
    this.service.addProductToUserCart(productToAdd);
    this.updateCartDataSource();
  }

  public changeAmount(cartProd: CartProduct, value: string, incDec: string): void {
    let paramNumber = +value;
    if (incDec === IncDec.INC) {
      paramNumber++;
    } else if (incDec === IncDec.DEC && paramNumber > 1) {
      paramNumber--;
    }
    this.service.changeProductAmount(cartProd, paramNumber);
  }

  removeProduct(productToRenmove: CartProduct) {
    this.service.removeCartProduct(productToRenmove);
    this.updateCartDataSource();
  }

  updateCartDataSource() {
    this.cartProductListDS.data = this.service.getUserCart().products;
  }

}
