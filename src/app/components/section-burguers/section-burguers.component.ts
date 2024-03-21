import { Component, Input } from '@angular/core';
import { ContainerItemsComponent } from '../container-items/container-items.component';

@Component({
  selector: 'app-section-burguers',
  standalone: true,
  imports: [ContainerItemsComponent],
  templateUrl: './section-burguers.component.html',
  styleUrl: './section-burguers.component.scss'
})
export class SectionBurguersComponent {
}
