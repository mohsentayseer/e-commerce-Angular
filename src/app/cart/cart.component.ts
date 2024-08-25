import { Component, NgModule } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  carts: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartArray().subscribe((data) => {
      this.carts = data;
    });
  }

  increaseQuantity(id: any) {
    const cartItem = this.carts.find((c) => c.id === id);
    if (cartItem && cartItem.quantity < cartItem.stock) {
      cartItem.quantity += 1;
      this.cartService.setCartArray(this.carts);
    }
  }

  decreaseQuantity(id: any) {
    const cartItem = this.carts.find((c) => c.id === id);
    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity -= 1;
      this.cartService.setCartArray(this.carts);
    }
  }

  removeItem(id: any) {
    this.carts = this.carts.filter((c) => c.id !== id);
    this.cartService.setCartArray(this.carts);
  }

  getTotalPrice() {
    const total = this.carts.reduce(
      (total, cart) => total + cart.price * cart.quantity,
      0
    );
    return Math.round(total * 100) / 100;
  }
}
