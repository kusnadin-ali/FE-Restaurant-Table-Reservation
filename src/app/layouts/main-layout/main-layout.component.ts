import { Component } from '@angular/core';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainSideMenuComponent } from './main-side-menu/main-side-menu.component';

@Component({
  imports:[MainNavbarComponent, MainSideMenuComponent],
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  standalone: true
})
export class MainLayoutComponent {

}
