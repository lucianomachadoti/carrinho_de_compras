import { Product } from "./product"

export interface Chart {
    id?: number,
    products?: Array<ChartProduct>,
    totalChartRawValue?: number,
    totalChartFinalPrice?: number
}

export interface ChartProduct {
    product: Product,
    amount: number,
}