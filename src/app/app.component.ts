import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayaoutComponent } from "./features/layaout/layaout.component";

@Component({
  selector: 'app-root',
  imports: [LayaoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heliconiaSpa';
}
