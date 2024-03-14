import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

  constructor(){}

  ngOnInit(): void {
      this.checkRestaurantOpen()
  }

  private checkRestaurantOpen():void {
    const data = new Date()
    const hour = data.getHours()
    this.isRestaurantOpen = hour >= 18 && hour <22
  }
}
