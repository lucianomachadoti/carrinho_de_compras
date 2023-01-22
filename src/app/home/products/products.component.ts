import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Product } from '../../shared/models/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  displayedProductListColumns: string[] = ['id', 'name', 'price', 'actions'];
  productListDS = new MatTableDataSource<Product>();

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.productListDS.data = this.service.getAllProducts();
  }

  // temporary to remove error from the template
  addProduct(productToAdd: Product): void {}
}
