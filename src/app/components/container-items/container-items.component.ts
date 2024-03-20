import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-items',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './container-items.component.html',
  styleUrl: './container-items.component.scss'
})
export class ContainerItemsComponent implements OnInit {
  @Input()
  name:string = ""
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
