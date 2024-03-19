import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerDrinkComponent } from '../container-drink/container-drink.component';

@Component({
  selector: 'app-section-drink',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ContainerDrinkComponent,
  ],
  templateUrl: './section-drink.component.html',
  styleUrl: './section-drink.component.scss'
})
export class SectionDrinkComponent {

}
