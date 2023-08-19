import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Observable } from 'rxjs';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {

  expenses$: Observable<Expense[]> | undefined;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenses$ = this.expenseService.expenses$;
    this.expenseService.loadAll();
  }

}
