import { Component, DestroyRef, effect, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ElementActiveDirective,
  ElementStatusType,
  ElementToggleService
} from '@c-code/c-code-fw';

import { ElementActiveService } from '@c-code/c-code-fw';
import { whatsappMsgDefault } from '../../../../const/wsp-msg-const';
import { ScreenWidthEventService } from '../../services/screen-width.service';
import { ScreenWidthType } from '../types/screem_width-type';

@Component({
  selector: 'app-header',
  standalone: true, // 👈 ¡esto es clave!
  imports: [CommonModule, RouterModule, ElementActiveDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // también aquí estaba mal: debe ser `styleUrls` no `styleUrl`
  providers: [
    ElementActiveService,
    ElementToggleService,
  ],
})
export class HeaderComponent {
  public ElementStatusType = ElementStatusType;
  public menuStatus!: ElementStatusType;
  public wspMsg: string = whatsappMsgDefault;
  private elementToggle: ElementToggleService = inject(ElementToggleService);
  private screenEvents: ScreenWidthEventService = inject(
    ScreenWidthEventService
  );
  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenEvents.setPlatformId(this.platformId);
      this.screenEvents.setDestroyRef(this.destroyRef);
      this.screenEvents.setWindows(window);
      this.screenEvents.executeFuncByScreenWidth(
        this.closedMenu.bind(this),
        ScreenWidthType.MD
      );
    }
    effect(() => {
      this.menuStatus = this.elementToggle.elementStatusToggle();
    });
  }
  openMenu() {
    this.elementToggle.toggleByElementStatusType(ElementStatusType.SHOW);
  }

  closedMenu() {
    this.elementToggle.toggleByElementStatusType(ElementStatusType.HIDDEN);
  }
}
