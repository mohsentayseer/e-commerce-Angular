import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartArray = new BehaviorSubject<any[]>([]);
  private cartCounter = new BehaviorSubject<number>(0);


  cartArray$ = this.cartArray.asObservable();
  cartCounter$ = this.cartCounter.asObservable();

  constructor() { }

  getCartArray() {
    return this.cartArray.asObservable();
  }

  setCartArray(newArray: any[]) {
    this.cartArray.next(newArray);
    this.updateCartCounter(newArray);
  }

  private updateCartCounter(cart: any[]) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCounter.next(totalItems);
  }

}
