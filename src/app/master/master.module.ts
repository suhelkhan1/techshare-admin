import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MasterComponent } from './components/master/master.component';
import { MasterRoutingModule } from './master.routes';

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule
  ],
  declarations: [
    MasterComponent
  ]
})
export class MasterModule { }
