import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Cart, CartProduct } from '../model/cart';
import { Product } from '../model/product';

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

  private productList: Array<Product> = [];
  private cart: Cart[] = [];
  private productAmount = "1";

  displayedProductListColumns: string[] = ['id', 'name', 'price', 'actions'];
  productListDS = this.productList;

  userCart: Cart = {id: 0, products: []};

  displayedCartListColumns: string[] = ['itemNumber', 'productName', 'singleUnitPrice', 'amount', 'totalItemPrice', 'actions'];
  cartProductListDS = new MatTableDataSource<CartProduct>();

  ngOnInit(): void {
    this.productList = [
      { id: 1, name: "Sabão", price: 2.35 } as Product,
      { id: 2, name: "Agua", price: 3.76 } as Product,
      { id: 3, name: "Papel", price: 7.81 } as Product
    ];

    this.productListDS = this.productList;
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
    console.log(productId);
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
