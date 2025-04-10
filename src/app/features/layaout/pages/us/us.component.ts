import { Component } from '@angular/core';
import { SocialMediaComponent } from "../../components/social-media/social-media.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-us',
  imports: [SocialMediaComponent, RouterModule],
  templateUrl: './us.component.html',
  styleUrl: './us.component.css'
})
export class UsComponent {

}
