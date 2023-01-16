import { Product } from "./product"

export interface Cart {
    id: number,
    products: CartProduct[],
    totalCartRawValue?: number,
    totalCartFinalPrice?: number
}

export interface CartProduct {
    cartProduct: Product,
    amount: number,
    totalItemValue: number
}