import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Masters',
    icon: 'nb-grid-b-outline',
    children: [
      {
        title: 'Symbols',
        link: '/masters/symbol',
      },
    ],
  }
];
