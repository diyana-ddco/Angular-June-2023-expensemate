import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { Page404Component } from './components/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    Page404Component,
    HeaderComponent,
    SidebarComponent
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
