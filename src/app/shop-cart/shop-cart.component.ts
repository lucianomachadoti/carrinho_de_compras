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

  userCart: Cart = {id: 0, products: []};

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
    console.log(productToAdd);
    
    this.userCart.products.push({ cartProduct: productToAdd, amount: 1, totalItemValue: productToAdd.price });
    this.updateCartDataSource();
  }

  public changeAmount(cartProd: CartProduct, value: string, incDec: string): void {
    let paramNumber = +value;
    if (incDec === IncDec.INC) {
      paramNumber++;
    } else if (incDec === IncDec.DEC && paramNumber > 1) {
      paramNumber--;
    }
    let foundItem = this.userCart.products.findIndex(product => product.cartProduct.id == cartProd.cartProduct.id);
    this.userCart.products[foundItem].amount = paramNumber;
  }

  removeProduct(productId: CartProduct) {
    let index = this.userCart.products.indexOf(productId);
    if (index > -1) {
      this.userCart.products.splice(index, 1);
    }
    this.updateCartDataSource();
  }

  updateCartDataSource() {
    this.cartProductListDS.data = this.userCart.products;
  }

}
