import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderSizeWrapperComponent } from "./components/header-size-wrapper/header-size-wrapper.component";

@Component({
  selector: 'app-layaout',
  imports: [HeaderComponent, RouterOutlet, FooterComponent, HeaderSizeWrapperComponent],
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.css'
})
export class LayaoutComponent {

}
