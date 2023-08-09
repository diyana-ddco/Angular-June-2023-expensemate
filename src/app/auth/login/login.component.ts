import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router); 
  private fb = inject(FormBuilder);

  loading: boolean = false;
  hidePassword: boolean = true;
  loginError: string | null = null;

  loginForm: FormGroup = this.fb.nonNullable.group({
    username: '',
    password: ''
  });;


  login(): void {
    this.authService.login(this.loginForm.value).then(() => {
      this.router.navigate(['/expenses']);
    }).catch((error) => {
      console.log(error);
      this.loginError = error.message;
    });;
    
  }

}
