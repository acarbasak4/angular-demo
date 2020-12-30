import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Product List";
  products: any[] = [
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus ZenBook"
    },
    {
      id: 2,
      name: "Mouse",
      price: 110,
      categoryId: 2,
      description: "LogiTech"
    },
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus ZenBook"
    },
    {
      id: 2,
      name: "Mouse",
      price: 110,
      categoryId: 2,
      description: "LogiTech"
    },
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus ZenBook"
    },
    {
      id: 2,
      name: "Mouse",
      price: 110,
      categoryId: 2,
      description: "LogiTech"
    },
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus ZenBook"
    },
    {
      id: 2,
      name: "Mouse",
      price: 110,
      categoryId: 2,
      description: "LogiTech"
    }
  ]


  ngOnInit(): void {
  }

}
