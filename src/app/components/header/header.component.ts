import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isRestaurantOpen:boolean = false;

  constructor(private restaurantService: RestaurantService){}

  ngOnInit(): void {
      this.isRestaurantOpen = this.restaurantService.checkRestaurantOpen()
  }
}
