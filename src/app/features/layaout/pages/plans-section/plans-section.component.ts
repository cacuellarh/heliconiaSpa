import { Component } from '@angular/core';
import { CardPlanSectionComponent } from "../../components/card-plan-section/card-plan-section.component";
import { SeparatorComponent } from "../../components/separator/separator.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plans-section',
  imports: [CardPlanSectionComponent, SeparatorComponent,RouterModule],
  templateUrl: './plans-section.component.html',
  styleUrl: './plans-section.component.css'
})
export class PlansSectionComponent {

}
