import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from './interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails:Cart = {} as Cart

  constructor(private _cartService: CartService) { }
  
  ngOnInit(): void {
  this.getCart()
}
  getCart() {
    this._cartService.getCart().subscribe({
      next: (res) => {
        this.cartDetails = res
      }
    })
  }
  updataProductCount(count: number, id: string) {
    this._cartService.updataProductCount(count, id).subscribe({
      next: (res) => {
        this.cartDetails = res
      }
    })
  }

  removeProduct(id:string) {
    this._cartService.removeProduct(id).subscribe({
      next: (res) => {
        this.cartDetails = res
      }
    })
  }
}
