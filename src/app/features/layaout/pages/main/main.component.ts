import { Component } from '@angular/core';
import { PlansSectionComponent } from '../plans-section/plans-section.component';
import { HeaderSizeWrapperComponent } from '../../components/header-size-wrapper/header-size-wrapper.component';
import { UsComponent } from '../us/us.component';
import { SeparatorComponent } from '../../components/separator/separator.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappApiComponent } from "../../components/whatsapp-api/whatsapp-api.component";


@Component({
  selector: 'app-main',
  imports: [
    PlansSectionComponent,
    HeaderSizeWrapperComponent,
    UsComponent,
    SeparatorComponent,
    FooterComponent,
    WhatsappApiComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {}
