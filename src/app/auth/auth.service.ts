import { Injectable, OnDestroy, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, from, map, switchMap, tap } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';

import { environment } from '../../environments/environment';
import { ConfirmSignUpParameters } from './model/ConfirmSignUpParameters.model';
import { SignUpParameters } from './model/SignUpParameters.model';
import { LoginParameters } from './model/LoginParameters.model';
import { HttpClient } from '@angular/common/http';
import { ACCESS_TOKEN } from '../core/constants/settings';
import { Router } from '@angular/router';
import { AUTH_ROUTER_TOKENS } from './auth.routes';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private readonly router = inject(Router);

  private authSubject$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  auth$: Observable<boolean> = this.authSubject$$.asObservable();

  private auth: boolean = false;
  private subscription: Subscription;

  constructor(private http: HttpClient) {
    Amplify.configure({
      Auth: environment.cognito,
    });

    if (localStorage.getItem(ACCESS_TOKEN)) {
      this.authSubject$$.next(true);
    }

    this.subscription = this.auth$.subscribe((auth) => {
      this.auth = auth;
    });
  }

  public register({ username, password, email }: SignUpParameters): Observable<any> {
    return from(Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email
      },
    }));
  }

  public confirmRegistration({ username, code }: ConfirmSignUpParameters): Observable<any> {
    return from(Auth.confirmSignUp(username, code));
  }

  public login({ username, password }: LoginParameters): Observable<any> {
    return from(Auth.signIn(username, password))
      .pipe(
        tap((user) => {
          const access_token = user.getSignInUserSession().getAccessToken().getJwtToken();
          localStorage.setItem(ACCESS_TOKEN, access_token);
          this.authSubject$$.next(true);
        })
      );
  }

  public logout(): void {
    Auth.signOut()
      .then(() => {
        localStorage.removeItem(ACCESS_TOKEN);
        this.authSubject$$.next(false);
      }).finally(() => {
        this.router.navigate(["/authentication/login"]);
      });
  }

  public getAuthUser(): Observable<any> {
    return from(Auth.currentUserInfo());
  }

  public getToken(): string | null {
    return (!!localStorage.getItem(ACCESS_TOKEN)) ? (<string>localStorage.getItem(ACCESS_TOKEN)) : null;
  }

  public isAuthenticated(): boolean {
    return this.auth;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };
}


