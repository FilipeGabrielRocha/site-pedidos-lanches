import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-burguer',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './container-burguer.component.html',
  styleUrl: './container-burguer.component.scss'
})
export class ContainerBurguerComponent implements OnInit {
  @Input()
  nameBurguer:string = ""
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
