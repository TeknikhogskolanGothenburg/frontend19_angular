import { Component, OnInit, Input } from "@angular/core";
import { ProductItem } from "src/app/models/ProductItem";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() item: ProductItem;
  constructor() {}

  ngOnInit(): void {}
}
