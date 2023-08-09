import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { IconsModule } from './icons.module';
import { SloganSectionComponent } from './slogan-section/slogan-section.component';

@NgModule({
  declarations: [
    SloganSectionComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    RouterLink,
    FormsModule, 
    ReactiveFormsModule
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
  ]
})
export class SharedModule { }
