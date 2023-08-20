import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../core/constants/settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http = inject(HttpClient);
  // private readonly user$$ = new BehaviorSubject<User | undefined>(undefined);
  // readonly user$ = this.user$$.asObservable();

  createUser(user:{username: string, email: string}): Observable<User> {
    return this.http.post<User>(`${apiUrl}/users`, user.email);
  }
}
