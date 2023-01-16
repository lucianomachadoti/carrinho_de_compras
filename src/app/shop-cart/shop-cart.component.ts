import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Cart, CartProduct } from '../model/cart';
import { Product } from '../model/product';

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
  cartProductListDS: CartProduct[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.productList = [
      { id: 1, name: "Sabão", price: 2.35 } as Product,
      { id: 2, name: "Agua", price: 3.76 } as Product,
      { id: 3, name: "Papel", price: 7.81 } as Product
    ];

    this.productListDS = this.productList;

    this.userCart = {
      id: 1,
      products: [
        { cartProduct: { id: 1, name: "Sabão", price: 2.35 } as Product, amount: 1, totalItemValue: 1.0 } as CartProduct,
        { cartProduct: { id: 2, name: "Agua", price: 3.76 } as Product, amount: 1, totalItemValue: 1.0 } as CartProduct,
      ] as CartProduct[],
      totalCartRawValue: 0,
      totalCartFinalPrice: 0
    };

    this.cartProductListDS = this.userCart.products;
  }

  addProduct(productToAdd: Product) {

  }

  public incAmount(cartProd: CartProduct, value: string) {
    let paramNumber = +value;
    paramNumber++;
    let foundItem = this.userCart.products.findIndex(product => product.cartProduct.id == cartProd.cartProduct.id);
    this.userCart.products[foundItem].amount = paramNumber;
  }

  public decNumber(value: string): string {
    let paramNumber = +value;
    paramNumber--;
    return paramNumber.toString();
  }

  removeProduct(productId: string) {
    console.log(productId);
  }

}
