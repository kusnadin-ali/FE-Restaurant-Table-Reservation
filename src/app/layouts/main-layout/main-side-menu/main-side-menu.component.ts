import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MenuItem } from 'primeng/api';
import { ITEM_SIDE_MENU } from './item-side-menu';

@Component({
  selector: 'app-main-side-menu',
  imports: [SharedModule],
  templateUrl: './main-side-menu.component.html',
  styleUrl: './main-side-menu.component.css',
})
export class MainSideMenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = ITEM_SIDE_MENU;
  }
}
