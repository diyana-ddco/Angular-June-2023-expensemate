import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  private authService = inject(AuthService);
  private router = inject(Router); 
  private fb = inject(FormBuilder);

  loading: boolean = false;
  
  resetPasswordForm: FormGroup = this.fb.nonNullable.group({
    username: ''
  });;

  resetPassword(): void {
    this.loading = true;
  }
}
