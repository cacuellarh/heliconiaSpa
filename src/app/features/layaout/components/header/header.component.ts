import { Component, inject } from '@angular/core';
import { LayaoutEventsService } from '../../services/layaout-events.service';
import { MenuStatus } from '../../types/menu-status-type';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ElementActiveDirective } from '@c-code/c-code-fw';
import { ElementActiveService } from '@c-code/c-code-fw';
import { whatsappMsgDefault } from '../../../../const/wsp-msg-const';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, ElementActiveDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ElementActiveService],
})
export class HeaderComponent {
  private layaoutEvents: LayaoutEventsService = inject(LayaoutEventsService);
  MenuStatus = MenuStatus;
  public wspMsg:string = whatsappMsgDefault
  public get menuStatus() {
    return this.layaoutEvents.menuStatus();
  }

  openMenu() {
    const newStatus =
      this.menuStatus === MenuStatus.Open ? MenuStatus.Closed : MenuStatus.Open;

    this.layaoutEvents.setMenuStatus(newStatus);
  }

  closedMenu(){
    this.layaoutEvents.setMenuStatus(MenuStatus.Closed)
  }
}
