import { Component } from '@angular/core';
import { LandingLayoutComponent } from '../../layouts/landing-layout/landing-layout.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-landing',
  imports: [LandingLayoutComponent, SharedModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
