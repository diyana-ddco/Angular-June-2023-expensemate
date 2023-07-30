import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  login(form: NgForm): void {
    console.log(form.value);
    //this.authenticationService.login(email, password);
    //this.router.navigate(['/']);
  }

}
