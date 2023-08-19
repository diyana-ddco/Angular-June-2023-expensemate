import { Injectable, inject } from '@angular/core';
import { Expense } from '../models/expense.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/core/constants/settings';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ExpenseService {
 
  private readonly http = inject(HttpClient);
  private readonly expensesUrl: string = `${apiUrl}/expenses`;
  
  private dataStore: { expenses: Expense[] } = { expenses: [] };
  private readonly expenses$$ = new BehaviorSubject<Expense[]>([]);
  readonly expenses$: Observable<Expense[]> = this.expenses$$.asObservable();

  public loadAll() {
    return this.http.get<Expense[]>(this.expensesUrl).subscribe({
      next: (data) => {
        this.dataStore.expenses = data;
        this.expenses$$.next([...this.dataStore.expenses]);
      },
      error: (error) => {
        console.log(error); // TODO error handling
      }
    });
  }

  public findById(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.expensesUrl}/${id}`);
  }

}
