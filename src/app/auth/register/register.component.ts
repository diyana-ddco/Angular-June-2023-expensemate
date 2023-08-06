import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CognitoService } from '../cognito.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  loading: boolean;
  hidePassword: boolean = true;
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

  public register(): void {
    this.loading = true;
    this.cognitoService.register(this.registerForm.value)
      .then(() => {
        this.loading = false;
        this.isConfirm = true;
      }).catch(() => {
        this.loading = false;
      });
  }

  public confirmRegistration(): void {
    this.loading = true;
    this.cognitoService.confirmRegistration(this.registerForm.value)
      .then(() => {
        this.router.navigate(['/login']);
      }).catch(() => {
        this.loading = false;
      });
  }

}
