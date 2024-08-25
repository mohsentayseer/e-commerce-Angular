import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgClass, FontAwesomeModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  fastar = faStar;
  @Input() product: any;
  constructor(private router: Router) {}
  
  ngOnInit() {

  }
  handleRedirect(id: number) {
    this.router.navigate(['/product-page', id]);
  }
}
