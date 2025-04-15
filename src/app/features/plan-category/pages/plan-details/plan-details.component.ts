import { Component, inject } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { PlanDto } from '../../dto/plan-dto';
import { SocialMediaComponent } from "../../../layaout/components/social-media/social-media.component";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { whatsappMsgDefault } from '../../../../const/wsp-msg-const';

@Component({
  selector: 'app-plan-details',
  imports: [SocialMediaComponent, CommonModule, RouterModule],
  templateUrl: './plan-details.component.html',
  styleUrl: './plan-details.component.css'
})
export class PlanDetailsComponent {

  private planService:PlanService = inject(PlanService);
  private router:Router = inject(Router);
  public msg : string = whatsappMsgDefault
  
  public planDetails! : PlanDto | null
  ngOnInit(){
    if(this.planService.planDetails() != null){
      this.planDetails = this.planService.planDetails();
    }else{
      this.router.navigate(['/']);
    }
  }
}
