import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { Page404Component } from './components/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';

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
