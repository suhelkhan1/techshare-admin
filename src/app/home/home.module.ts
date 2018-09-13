import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    HomeRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class HomeModule { }
