import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  quantity = 0;
  totalCartItems = 0;
  faCart = faCartShopping;
  constructor(private cartService : CartService){}
  ngOnInit() {
    this.cartService.cartCounter$.subscribe(count => {
      this.totalCartItems = count;
    });
  }

}
