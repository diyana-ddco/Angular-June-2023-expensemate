import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { IconsModule } from './icons.module';
import { SloganSectionComponent } from './slogan-section/slogan-section.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    NgScrollbarModule,
    FlexLayoutModule
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
    NgScrollbarModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
