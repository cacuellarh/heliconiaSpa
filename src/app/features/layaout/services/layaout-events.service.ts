import { Injectable, signal } from '@angular/core';
import { MenuStatus } from '../types/menu-status-type';

@Injectable({
  providedIn: 'root'
})
export class LayaoutEventsService {

  private _menuStatus = signal<MenuStatus>(MenuStatus.Closed);

  get menuStatus(){
    return this._menuStatus;
  }

  setMenuStatus(status : MenuStatus){
    this._menuStatus.set(status);
  }
}
