import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';

import { environment } from '../../environments/environment';
import { ConfirmSignUpParameters } from './model/ConfirmSignUpParameters.model';
import { SignUpParameters } from './model/SignUpParameters.model';

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

  public register({ username, password, email }: SignUpParameters): Promise<any> {
    return Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email
      },
    });
  }

  public confirmRegistration({ username, code }: ConfirmSignUpParameters): Promise<any> {
    return Auth.confirmSignUp(username, code);
  }

  public login(email: string, password: string): Promise<any> {
    return Auth.signIn(email, password)
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
