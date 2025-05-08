import { Component } from '@angular/core';
import { SocialMediaComponent } from "../social-media/social-media.component";

@Component({
  selector: 'app-footer',
  imports: [SocialMediaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public email : string = "heliconiaspanva@gmail.com";
}
