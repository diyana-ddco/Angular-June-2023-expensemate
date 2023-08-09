import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private readonly http = inject(HttpClient);
  // private readonly user$$ = new BehaviorSubject<User | undefined>(undefined);
  // readonly user$ = this.user$$.asObservable();

  // authentication = this.http.get<Array<{name: string, permissions: string[]}>>('http://localhost:8080/authorization');
  
  // userAuth = this.user$$.pipe(
  //   switchMap((user) => this.authentication.pipe(
  //     map((auth) => auth.find((userAuth) => userAuth.name.toLowerCase() === user?.toLowerCase())?.permissions) || []
  //   )));

  // setUser(user?: User) {
  //   console.log('user: ', user?.email)
  //   this.user$$.next(user);
  // }
}
