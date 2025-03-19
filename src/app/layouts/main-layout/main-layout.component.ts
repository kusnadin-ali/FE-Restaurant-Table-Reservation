import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainSideMenuComponent } from './main-side-menu/main-side-menu.component';
import { SharedModule } from '../../shared/shared.module';
import { isPlatformServer } from '@angular/common';

@Component({
  imports:[MainNavbarComponent, MainSideMenuComponent, SharedModule],
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  standalone: true
})
export class MainLayoutComponent {
  isLoading: boolean = false;
  isServer: boolean = false;

  constructor( @Inject(PLATFORM_ID) platformId: Object) {
    this.isServer = isPlatformServer(platformId);
    console.log('is server',this.isServer);
  }
}
