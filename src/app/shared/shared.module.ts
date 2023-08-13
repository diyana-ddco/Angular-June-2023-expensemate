import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { IconsModule } from './icons.module';
import { SloganSectionComponent } from './slogan-section/slogan-section.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    SloganSectionComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    RouterLink,
    FormsModule, 
    ReactiveFormsModule,
    NgScrollbarModule
  ],
  exports: [
    SloganSectionComponent,
    CommonModule,
    RouterModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    MaterialModule,
    NgScrollbarModule
  ]
})
export class SharedModule { }
