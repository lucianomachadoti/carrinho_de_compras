import { Injectable } from '@angular/core';
import { Cart, CartProduct } from '../model/cart';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  private productList: Array<Product> = [];
  private userCart: Cart = {id: 0, products: []};

  constructor() { }

  getAllProducts(): Array<Product> {
    return this.productList = [
      { id: 1, name: "Sabão", price: 2.35 } as Product,
      { id: 2, name: "Agua", price: 3.76 } as Product,
      { id: 3, name: "Papel", price: 7.81 } as Product
    ];
  }

  getUserCart(): Cart {
    return this.userCart;
  }

  addProductToUserCart(productToAdd: Product): void {
    this.userCart.products.push({ cartProduct: productToAdd, amount: 1, totalItemValue: productToAdd.price });
  }

  removeCartProduct(productToRemove: CartProduct): void {
    let index = this.userCart.products.indexOf(productToRemove);
    if (index > -1) {
      this.userCart.products.splice(index, 1);
    }
  }

  changeProductAmount(cartProd: CartProduct, newAmout: number): void {
    let foundItem = this.userCart.products.findIndex(product => product.cartProduct.id == cartProd.cartProduct.id);
    this.userCart.products[foundItem].amount = newAmout;
  }
}
