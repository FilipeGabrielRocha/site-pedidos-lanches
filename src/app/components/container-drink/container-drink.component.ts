import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-drink',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './container-drink.component.html',
  styleUrl: './container-drink.component.scss'
})
export class ContainerDrinkComponent implements OnInit {
  @Input()
  nameDrink:string = ""
  @Input()
  altImg:string = ""
  @Input()
  ngSrc:string = ""
  @Input()
  description:string = ""
  @Input()
  price:string = ""

  constructor(){}

  ngOnInit():void {
  }

}
