import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-side-menu',
  imports: [SharedModule],
  templateUrl: './main-side-menu.component.html',
  styleUrl: './main-side-menu.component.css',
})
export class MainSideMenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-home',
            routerLink: '/dashboard',
          },
        ],
      },
      {
        label: 'Users',
        items: [
          {
            label: 'Daftar User',
            icon: 'pi pi-users',
            routerLink: '/list-users',
          },
        ],
      },
    ];
  }
}
