import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  private authenticationSubject$: BehaviorSubject<any>;

  constructor() {

    Amplify.configure({
      Auth: environment.cognito,
    });

    this.authenticationSubject$ = new BehaviorSubject<boolean>(false);
  }

  public signUp(email: string, password: string): Promise<any> {
    return Auth.signUp({
      username: email,
      password: password,
    });
  }

  public confirmSignUp(email: string, code: string): Promise<any> {
    return Auth.confirmSignUp(email, code);
  }

  public signIn(email: string, password: string): Promise<any> {
    return Auth.signIn(email, password)
      .then(() => {
        this.authenticationSubject$.next(true);
      });
  }

  public signOut(): Promise<any> {
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
        } else {
          return false;
        }
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
