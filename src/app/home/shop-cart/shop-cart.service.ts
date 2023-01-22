import { Injectable } from '@angular/core';
import { Cart, CartProduct } from '../../shared/models/cart';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ShopCartService {
  private userCart: Cart = { id: 0, products: [] };

  constructor() {}

  getUserCart(): Cart {
    return this.userCart;
  }

  addProductToUserCart(productToAdd: Product): void {
    this.userCart.products.push({
      cartProduct: productToAdd,
      amount: 1,
      totalItemValue: productToAdd.price,
    });
  }

  removeCartProduct(productToRemove: CartProduct): void {
    let index = this.userCart.products.indexOf(productToRemove);
    if (index > -1) {
      this.userCart.products.splice(index, 1);
    }
  }

  changeProductAmount(cartProd: CartProduct, newAmout: number): void {
    let foundItem = this.userCart.products.findIndex(
      (product) => product.cartProduct.id == cartProd.cartProduct.id
    );
    this.userCart.products[foundItem].amount = newAmout;
  }
}
