import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../models/product-model';
import { HttpService } from '../services/http.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productsArray: any;
  constructor(private httpList: HttpService) {}

  ngOnInit() {
    this.httpList.getList().subscribe((res:any) => this.productsArray = res.products);
  }
}
