import { Component, input, OnInit } from '@angular/core';
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
  isCartItemsEmpty = true
  inputValue:string = ""

  constructor(private restaurantService: RestaurantService) {
    this.items = ContainerItemsComponent.cartItems
  }

  ngOnInit(): void {
    let isRestaurantOpen = this.restaurantService.checkRestaurantOpen()
    this.isRestaurantOpen = isRestaurantOpen
  }

  openModal() {
    this.showModal = !this.showModal;

    this.showCartItems = this.items.length > 0

    this.getCartItems();
  }

  getCartItems() {
    const cartItems = this.items;
    let total = 0
    cartItems.forEach((item) => {
      total += item.price * item.quantity
    });
    this.totalCash = total
  }

  getCartItemsLength(): number {
    return this.items.length;
  }

  removeToCart(quantity:number, index:number){
    const cartItems = this.items;

    if (quantity > 1){
      cartItems[index].quantity--
    } else {
      cartItems.splice(index, 1)
    }
    this.getCartItems()
  }

  checkEmpty($event:any){
    if($event.target.value.trim() === ""){
      this.isEmpty = true
    } else {
      this.isEmpty = false
    }
    this.inputValue = $event.target.value
  }

  teste(inputValue:string){
    if(inputValue !== "" && this.items.length > 0){

      ContainerItemsComponent.cartItems = []
      this.items = ContainerItemsComponent.cartItems
      this.totalCash = 0

      this.clearInput()

      this.openModal()
    } else if(inputValue === "") {
      this.isEmpty = true
    }
  }

  clearInput(){
    this.inputValue = ""
  }
}
