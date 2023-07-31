import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CognitoService } from '../cognito.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  loading: boolean;
  isConfirm: boolean;

  registerForm: FormGroup;

  constructor(private cognitoService: CognitoService, private router: Router, fb: FormBuilder) {
    this.loading = false;
    this.isConfirm = false;

    this.registerForm = fb.nonNullable.group({
      username: '',
      email: '',
      password: '',
      code: ''
    });
  }

  public signUp(): void {
    this.loading = true;
    this.cognitoService.signUp(this.registerForm.value)
      .then(() => {
        this.loading = false;
        this.isConfirm = true;
      }).catch(() => {
        this.loading = false;
      });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.registerForm.value)
      .then(() => {
        this.router.navigate(['/signIn']);
      }).catch(() => {
        this.loading = false;
      });
  }

}
