import { Component } from '@angular/core';
import { LandingLayoutComponent } from '../../layouts/landing-layout/landing-layout.component';

@Component({
  standalone: true,
  selector: 'app-landing',
  imports: [LandingLayoutComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
