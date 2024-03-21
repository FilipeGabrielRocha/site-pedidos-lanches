import { Component } from '@angular/core';
import { ContainerItemsComponent } from '../container-items/container-items.component';

@Component({
  selector: 'app-section-drinks',
  standalone: true,
  imports: [
    ContainerItemsComponent
  ],
  templateUrl: './section-drinks.component.html',
  styleUrl: './section-drinks.component.scss'
})
export class SectionDrinksComponent {

}
