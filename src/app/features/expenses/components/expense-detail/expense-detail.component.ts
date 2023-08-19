import { Component, OnInit, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);

  expense?: Expense;
  loading: boolean = true;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadData(id);
    });
  }

  private loadData(id: number) {
    this.loading = true;
    this.expenseService.findById(id).subscribe({
      next: (data) => {
        this.expense = data;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        //this.errorMessage = error; TODO error handling
        this.loading = false;
      }
    });
  }

}
