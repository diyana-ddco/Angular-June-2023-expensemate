import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { Page404Component } from './page404/page404.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    Page404Component,
    HeaderComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    AuthLayoutComponent,
    MainLayoutComponent,
    Page404Component
  ]
})
export class CoreModule { }
