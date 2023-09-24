import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.css']
})
export class FeatureProductsComponent implements OnInit{

  allProduct: Product[] = [];
  searchKey :string = ''

  constructor(private _productsService: ProductsService) { }
  
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this._productsService.getProducts().subscribe({
      next: (res) => {
        this.allProduct= res.data
        
      }
    })
  }
}

