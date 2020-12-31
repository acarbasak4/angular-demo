import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private ProductService: ProductService) { }
  title = "Product List";
  filterText = "";
  products: Product[];

  ngOnInit() {
    this.ProductService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(product: { name: string; }) {
    this.alertifyService.success(product.name + " added.");
  }
}
