import { Component } from '@angular/core';
import { ContainerBurguerComponent } from '../container-burguer/container-burguer.component';

@Component({
  selector: 'app-section-burger',
  standalone: true,
  imports: [
    ContainerBurguerComponent,
  ],
  templateUrl: './section-burger.component.html',
  styleUrl: './section-burger.component.scss'
})
export class SectionBurgerComponent {

}
