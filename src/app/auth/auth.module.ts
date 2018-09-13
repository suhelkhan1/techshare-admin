import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: []
})
export class AuthModule { }
