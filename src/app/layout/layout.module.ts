import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarService,
  NbMenuService,
} from '@nebular/theme';

import {
  HeaderComponent,
  FooterComponent,
  SidebarComponent
} from './components/index';

const NebularModules = [
  NbSidebarModule,
  NbLayoutModule,
];
const NebularServices = [
  NbSidebarService,
  NbMenuService
];
const LayoutComponents = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
];
@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    ...NebularModules,
  ],
  declarations: [
    ...LayoutComponents
  ],
  providers: [
    ...NebularServices,
  ],
  exports: [
    NbThemeModule,
    NbMenuModule,
    ...NebularModules,
    ...LayoutComponents
  ]
})
export class LayoutModule { }
