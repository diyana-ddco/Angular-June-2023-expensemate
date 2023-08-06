import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    AuthLayoutComponent,
    MainLayoutComponent
  ]
})
export class CoreModule { }
