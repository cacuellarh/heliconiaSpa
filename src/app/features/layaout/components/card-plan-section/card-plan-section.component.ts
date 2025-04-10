import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-plan-section',
  imports: [],
  templateUrl: './card-plan-section.component.html',
  styleUrl: './card-plan-section.component.css'
})
export class CardPlanSectionComponent {

  @Input() imgPath : string = "";
  @Input() description : string ="";
  @Input() tittle : string ="";
}
