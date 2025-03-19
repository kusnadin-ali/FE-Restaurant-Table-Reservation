import { MenuItem } from "primeng/api";

export const ITEM_SIDE_MENU: MenuItem[] = [
  {
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/dashboard',
        routerLinkActiveOptions: {exact: true},
        routerLinkActive: 'active',
      },
    ],
  },
  {
    label: 'Users',
    items: [
      {
        label: 'Daftar User Restaurant',
        icon: 'pi pi-users',
        routerLink: '/list-user/restaurant',
        routerLinkActiveOptions: {exact: true},
        routerLinkActive: 'active',
      },
      {
        label: 'Daftar User Customer',
        icon: 'pi pi-users',
        routerLink: '/list-user/customer',
        routerLinkActiveOptions: {exact: true},
        routerLinkActive: 'active',
      },
    ],
  },
];
