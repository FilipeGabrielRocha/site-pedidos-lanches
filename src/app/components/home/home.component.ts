import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContainerItemsComponent } from '../container-items/container-items.component';
import { SectionBurguersComponent } from '../section-burguers/section-burguers.component';
import { SectionDrinksComponent } from '../section-drinks/section-drinks.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SectionBurguersComponent,
    SectionDrinksComponent,
    NgIf,
    NgFor,
    NgClass,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  showModal:boolean = false;
  showCartItems:boolean = false;
  totalCash:number = 0;
  items:any[] = []
  isRestaurantOpen:boolean = false
  isEmpty:boolean = false

  constructor(private restaurantService: RestaurantService) {
    this.items = ContainerItemsComponent.cartItems
  }

  ngOnInit(): void {
      let isRestaurantOpen = this.restaurantService.checkRestaurantOpen()
      this.isRestaurantOpen = isRestaurantOpen
  }

  openModal() {
    this.showModal = !this.showModal;

    if(ContainerItemsComponent.cartItems.length > 0){
      this.showCartItems = true
    } else {
      this.showCartItems = false
    }

    this.getCartItems();
  }

  getCartItems() {
    const cartItems = ContainerItemsComponent.cartItems;
    let total = 0
    cartItems.forEach((item) => {
      total += item.price * item.quantity
    });
    this.totalCash = total
  }

  getCartItemsLength(): number {
    return ContainerItemsComponent.cartItems.length;
  }

  removeToCart(quantity:number, index:number){
    const cartItems = ContainerItemsComponent.cartItems;

    if (quantity > 1){
      cartItems[index].quantity--
      this.getCartItems()
      return
    } else {
      cartItems.splice(index, 1)
      this.getCartItems()
    }

  }

  btnCheckoutWarn(addressInput: string){
    if (addressInput === ""){
      this.isEmpty = true
    } else {
      this.isEmpty = false
    }
  }
}
