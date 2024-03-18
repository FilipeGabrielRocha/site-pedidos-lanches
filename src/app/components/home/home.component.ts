import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
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
