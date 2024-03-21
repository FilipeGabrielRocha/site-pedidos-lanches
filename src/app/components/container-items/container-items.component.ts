import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-items',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './container-items.component.html',
  styleUrl: './container-items.component.scss'
})
export class ContainerItemsComponent {
  @Input() name:string = ""
  @Input() altImg:string = ""
  @Input() ngSrc:string = ""
  @Input() description:string = ""
  @Input() price:number = 0

  static cartItems: {
    name:string,
    price: number,
    quantity: number
  }[] = []

  constructor(){}

  addToCart(item: { name: string, price: number }):void {
    const itemIndex = ContainerItemsComponent.cartItems.find(cartItems => cartItems.name === item.name)

    if (itemIndex){
      itemIndex.quantity++
    } else {
      ContainerItemsComponent.cartItems.push({...item, quantity: 1})
    }
  }
}
