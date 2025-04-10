import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  imports: [],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css'
})
export class PlanCardComponent {

  @Input() imgPath:string = "";
  @Input() name:string = "";
}
