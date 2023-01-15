import { Component, OnInit } from '@angular/core';
import { Chart } from '../model/chart';
import { Product } from '../model/product';

@Component({
  selector: 'app-shop-chart',
  templateUrl: './shop-chart.component.html',
  styleUrls: ['./shop-chart.component.css']
})
export class ShopChartComponent implements OnInit {

  productList: Array<Product> = [];
  chart: Chart = {};

  ngOnInit(): void {
    this.productList = [
      { id: 1, name: "Sabão", price: 2.35 } as Product,
      { id: 2, name: "Agua'", price: 2.35 } as Product,
      { id: 3, name: "Papel", price: 2.35 } as Product
    ];
  
    this.chart = {
      id: 0,
      products: [],
      totalChartRawValue: 0,
      totalChartFinalPrice: 0
    };
  }

}
