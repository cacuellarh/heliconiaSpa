import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layaout',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.css'
})
export class LayaoutComponent {

}
