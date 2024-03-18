import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SectionBurgerComponent } from '../section-burger/section-burger.component';
import { SectionDrinkComponent } from '../section-drink/section-drink.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SectionBurgerComponent,
    SectionDrinkComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showModal:boolean = false

  constructor(){}

  openModal(){
    if (this.showModal !== true){
      this.showModal = true
    } else {
      this.showModal = false
    }
  }

}
