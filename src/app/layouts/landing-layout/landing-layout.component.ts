import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule, isPlatformServer } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-landing-layout',
  imports: [
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
    ImageModule,
    ButtonModule,
    SharedModule,
  ],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
  standalone: true,
})
export class LandingLayoutComponent {
  isServer: boolean = false
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
  ];

  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: Object) {
    this.isServer = isPlatformServer(platformId);
  }

  handleLoginButton() {
    this.router.navigate(['/login']);
  }
}
