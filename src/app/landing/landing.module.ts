import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';

import { GlobalModule } from '../global/global.module';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    GlobalModule, FormsModule, ReactiveFormsModule
  ]
})
export class LandingModule { }
