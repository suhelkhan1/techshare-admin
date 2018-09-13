import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService
} from '@nebular/theme';

import {
  HeaderComponent,
  FooterComponent,
  SidebarComponent
} from './components/index';

const Nebular = [
  NbSidebarModule,
  NbLayoutModule,
];
@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    ...Nebular,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers: [
    NbSidebarService,
  ],
  exports: [
    NbThemeModule,
    ...Nebular,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
