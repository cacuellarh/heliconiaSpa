import { Component } from '@angular/core';
import { HeaderSizeWrapperComponent } from "../layaout/components/header-size-wrapper/header-size-wrapper.component";
import { ItemInfoComponent } from "./component/item-info/item-info.component";
import { WhatsappApiComponent } from "../layaout/components/whatsapp-api/whatsapp-api.component";

@Component({
  selector: 'app-reservation-policies',
  imports: [HeaderSizeWrapperComponent, ItemInfoComponent, WhatsappApiComponent],
  templateUrl: './reservation-policies.component.html',
  styleUrl: './reservation-policies.component.css'
})
export class ReservationPoliciesComponent {

}
