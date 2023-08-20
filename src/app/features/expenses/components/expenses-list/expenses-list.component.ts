import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Observable, Subscription } from 'rxjs';
import { Expense } from '../../models/expense.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';
import { NewExpenseComponent } from '../new-expense/new-expense.component';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit, OnDestroy {

  expenses$: Observable<Expense[]> | undefined;

  displayedColumns: string[] = ['expenseDate', 'amount', 'supplier.name', 'category.name'];
  dataSource: MatTableDataSource<Expense> = new MatTableDataSource<Expense>();

  @ViewChild(MatPaginator) paginator!: MatPaginator | null;
  @ViewChild(MatSort) sort!: MatSort | null;;

  private subscription?: Subscription;

  constructor(private expenseService: ExpenseService, private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router) {

  }

  ngOnInit(): void {
    this.expenses$ = this.expenseService.expenses$;
    this.expenseService.loadAll();
    this.subscription = this.expenses$.subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<Expense>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }


  openAddExpenseDialog() {
    let dialogRef = this.dialog.open(NewExpenseComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar("Expense added", "Navigate")
          .onAction().subscribe(() => {
            this.router.navigate(['/expenses', result.id]);
          });
      }
    })
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  };
}
