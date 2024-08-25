import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): string {
    if (!discountPercentage) {
      return `${price.toFixed(2)} EGP`;
    }

    const discountedPrice = price - (price * (discountPercentage / 100));
    return `${price.toFixed(2)} EGP / <span class="text-success">${discountedPrice.toFixed(2)} EGP</span>`;
  }
}