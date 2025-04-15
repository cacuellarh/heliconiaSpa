import { Component} from '@angular/core';
import { HeaderSizeWrapperComponent } from '../layaout/components/header-size-wrapper/header-size-wrapper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ElementActiveService } from '@c-code/c-code-fw';
import { WhatsappApiComponent } from "../layaout/components/whatsapp-api/whatsapp-api.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-plan-category',
  imports: [
    HeaderSizeWrapperComponent,
    CommonModule,
    FormsModule,
    WhatsappApiComponent,
    RouterOutlet
],
  templateUrl: './plan-category.component.html',
  styleUrl: './plan-category.component.css',
  // providers:[ElementActiveService]
})
export class PlanCategoryComponent {
  
}
