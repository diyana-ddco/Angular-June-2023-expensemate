import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { CustomValidators } from 'src/app/core/validators/custom.validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  
  private authService = inject(AuthService);
  private router = inject(Router); 
  private fb = inject(FormBuilder);

  private errorPriorities = [
    'required',
    'minlength',
    'atLeastOneNumber',
    'atLeastOneSpecialCharacter',
    'atLeastOneLowercaseLetter',
    'atLeastOneUppercaseLetter'
  ];

  private passwordErrorMessages = {
    'required': 'Password is required',
    'minlength': 'Password must be at least 8 characters long.',
    'atLeastOneNumber': 'Password must contain at least one number.',
    'atLeastOneSpecialCharacter': 'Password must contain at least one special character.',
    'atLeastOneLowercaseLetter': 'Password must contain at least one lowercase letter.',
    'atLeastOneUppercaseLetter': 'Password must contain at least one uppercase letter.'
  };

  isCodeConfirm: boolean = false;
  loadingCodeConfirm: boolean = false;
  registerError: string | null = null;
  
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  
  registerForm: FormGroup = this.fb.nonNullable.group({
    username: '',
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      CustomValidators.atLeastOneLowercaseLetter,
      CustomValidators.atLeastOneNumber,
      CustomValidators.atLeastOneSpecialCharacter,
      CustomValidators.atLeastOneLowercaseLetter, 
      CustomValidators.atLeastOneUppercaseLetter 
    ]],
    confirmPassword: ['', [
      Validators.required,
      this.matchPasswords.bind(this)
    ]],
    code: ''
  });

  private matchPasswords(control: AbstractControl): ValidationErrors | null {
    const password = this.registerForm?.get('password')?.value;
    const confirmPassword = control.value;
    
    if (password !== confirmPassword) {
      return { passwordsNotMatch: true };
    }
    return null;
  }

  public register(): void {
    this.loadingCodeConfirm = true;
    this.authService.register(this.registerForm.value).subscribe({
      next: (result) => {
        this.loadingCodeConfirm = false;
        this.isCodeConfirm = true;
      },
      error: (err) => {
        this.registerError = err.message;
        this.loadingCodeConfirm = false;
      }
    });
  }

  public confirmRegistration(): void {
    this.loadingCodeConfirm = true;
    this.authService.confirmRegistration(this.registerForm.value).subscribe({
      next: () => this.router.navigate(['/authentication/login']),
      error: (err) => {
        this.loadingCodeConfirm = false;
        this.registerError = err.message;
      }
    });
  }

  public getHighestPriorityError(control: AbstractControl | null): string | undefined {
    return this.errorPriorities.find(error => control?.hasError(error));
  }

  public getPasswordErrorMessage(errorKey?: string): string {
    return this.passwordErrorMessages[errorKey as keyof typeof this.passwordErrorMessages] || 'Invalid password.';
  }
}
