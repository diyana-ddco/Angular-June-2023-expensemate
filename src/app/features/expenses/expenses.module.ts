import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EXPENSES_ROUTES } from './expenses.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpenseService } from './services/expense.service';
import { CategoryService } from './services/category.service';
import { SupplierService } from './services/supplier.service';
import { ExpenseDetailComponent } from './components/expense-detail/expense-detail.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';


@NgModule({
  declarations: [
    ExpensesListComponent,
    ExpenseDetailComponent,
    NewExpenseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(EXPENSES_ROUTES)
  ],
  providers: [
    ExpenseService,
    CategoryService,
    SupplierService
  ]
})
export class ExpensesModule { }
