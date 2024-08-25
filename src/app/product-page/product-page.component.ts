import { CartService } from './../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../discount.pipe';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgClass,
    FormsModule,
    DiscountPipe,
    NgFor,
    RouterLink,
  ],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'], 
})
export class ProductPageComponent  {
  selectedImage = '';
  productDetails: any;
  faStar = faStar
  cartArray: any[] = [];
  quantities: { [id: number]: number } = {}; 

  @Input() id: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.http.getProduct(this.id).subscribe((res: any) => {
      this.productDetails = res;
      this.quantities[this.productDetails.id] = 1; 
    });

    this.cartService.getCartArray().subscribe((cart) => {
      this.cartArray = cart;
    });
  }

  navigateHome() {
    this.router.navigate(['']);
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  decreaseQuantity(productId: number) {
    if (this.quantities[productId] > 1) {
      this.quantities[productId]--;
    }
  }

  increaseQuantity(productId: number) {
    if (this.quantities[productId] < this.productDetails?.stock) {
      this.quantities[productId]++;
    }
  }

  addToCart() {
    const quantity = this.quantities[this.productDetails.id];
    this.productDetails.quantity = quantity;

    const productInCart = this.cartArray.find(
      (item: any) => item.id === this.productDetails.id
    );

    if (quantity > 0) {
      if (productInCart) {
        productInCart.quantity += quantity;
      } else {
        this.cartArray.push({ ...this.productDetails });
      }
      this.cartService.setCartArray(this.cartArray);
    }
    this.router.navigate(['']);
  }

  buyNow() {
    this.cartService.getCartArray().subscribe((cart) => console.log(cart));
  }
}