import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, map, switchMap, tap } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';

import { environment } from '../../environments/environment';
import { ConfirmSignUpParameters } from './model/ConfirmSignUpParameters.model';
import { SignUpParameters } from './model/SignUpParameters.model';
import { LoginParameters } from './model/LoginParameters.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticationSubject$: BehaviorSubject<boolean>;

  constructor() {
    Amplify.configure({
      Auth: environment.cognito,
    });
    this.authenticationSubject$ = new BehaviorSubject<boolean>(false);
  }

  public register({ username, password, email }: SignUpParameters): Observable<string> {
    return from(Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email
      },
    })).pipe(tap(console.log));
  }

  public confirmRegistration({ username, code }: ConfirmSignUpParameters): Promise<any> {
    return Auth.confirmSignUp(username, code);
  }

  public login({username, password}: LoginParameters): Promise<any> {
    return Auth.signIn(username, password)
      .then(() => {
        this.authenticationSubject$.next(true);
      });
  }

  public logout(): Promise<any> {
    return Auth.signOut()
      .then(() => {
        this.authenticationSubject$.next(false);
      });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject$.value) {
      return Promise.resolve(true);
    }

    return this.getUser()
      .then((user: any) => {
        if (user) {
          return true;
        }
        return false;
      }).catch(() => {
        return false;
      });
  }

  public getUser(): Promise<any> {
    return Auth.currentUserInfo();
  }

  // public updateUser(user: IUser): Promise<any> {
  //   return Auth.currentUserPoolUser()
  //   .then((cognitoUser: any) => {
  //     return Auth.updateUserAttributes(cognitoUser, user);
  //   });
  // }


}
// function ISignupResult(value: ISignUpResult, index: number): boolean {
//   throw new Error('Function not implemented.');
// }

