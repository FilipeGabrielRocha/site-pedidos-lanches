import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Output() openModalEvent = new EventEmitter<void>();

  constructor(){}

  openModal(){
    this.openModalEvent.emit();
  }
}
