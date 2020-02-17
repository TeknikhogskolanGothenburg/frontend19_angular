import { Component, OnInit } from "@angular/core";
import { ProductItem } from "../../models/ProductItem";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  items: ProductItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        Id: "1",
        Name: "Apple",
        Price: 3.45,
        Image: "red_apples.png",
        Description: "A good thing"
      },
      {
        Id: "2",
        Name: "Lemon",
        Price: 1.25,
        Image: "lemon.png",
        Description: "A sour thing"
      },
      {
        Id: "3",
        Name: "Banana",
        Price: 4.45,
        Image: "banana.png",
        Description: "A long thing"
      }
    ];
  }
}
