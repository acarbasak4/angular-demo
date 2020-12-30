import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Product List";
  products: Product[] = [
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus ZenBook",
      imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 50,
      categoryId: 2,
      description: "LogiTech",
      imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    },
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus ZenBook",
      imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 50,
      categoryId: 2,
      description: "LogiTech",
      imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    },
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus ZenBook",
      imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 50,
      categoryId: 2,
      description: "LogiTech",
      imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    },
    {
      id: 1,
      name: "Laptop",
      price: 2500,
      categoryId: 1,
      description: "Asus ZenBook",
      imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    },
    {
      id: 2,
      name: "Mouse",
      price: 50,
      categoryId: 2,
      description: "LogiTech",
      imageUrl:"https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
    }
  ]


  ngOnInit(): void {
  }

}
