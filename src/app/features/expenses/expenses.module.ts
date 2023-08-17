import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { EXPENSES_ROUTES } from './expenses.routes';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ExpensesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(EXPENSES_ROUTES)
  ]
})
export class ExpensesModule { }
