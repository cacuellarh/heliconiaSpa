import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clothes-card',
  imports: [],
  templateUrl: './clothes-card.component.html',
  styleUrl: './clothes-card.component.css'
})
export class ClothesCardComponent {

  @Input() imageUrl: string = '1.jpg';
}
