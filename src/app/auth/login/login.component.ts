import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading: boolean = false;
  hidePassword: boolean = true;
  loginError: string | null = null;

  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router, private fb: FormBuilder) { 
    
    this.loginForm = fb.nonNullable.group({
      username: '',
      email: '',
      password: ''
    });
  }

  login(): void {
    console.log(this.loginForm.value);
    //this.authenticationService.login(email, password);
    //this.router.navigate(['/']);
  }

}
