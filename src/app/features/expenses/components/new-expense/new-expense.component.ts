import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { MatDialogRef } from '@angular/material/dialog';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent implements OnInit {

  categories = [
    {name: 'Cat 1'}, {name: 'Cat 2'}
  ];

  expense: Expense;
  
  constructor(private dialogRef: MatDialogRef<NewExpenseComponent>, private expenseService: ExpenseService) { 
    this.expense = new Expense();
  }


  ngOnInit(): void {
    
  }

  createExpense() {
    console.log(this.expense);
    this.expenseService.createExpense(this.expense).subscribe(expense => {
      console.log(expense);
      this.expenseService.loadAll();
      this.dialogRef.close(expense);
    });
    
  }

  cancel() {
    console.log(this.expense);
    this.dialogRef.close(null);
  }
}
