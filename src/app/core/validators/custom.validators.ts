import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static atLeastOneNumber(control: AbstractControl): ValidationErrors | null {
    if (!/[0-9]/.test(control.value)) {
      return { atLeastOneNumber: true };
    }
    return null;
  }

  static atLeastOneSpecialCharacter(control: AbstractControl): ValidationErrors | null {
    if (!/[!@#$%^&*_]/.test(control.value)) {
      return { atLeastOneSpecialCharacter: true };
    }
    return null;
  }

  static atLeastOneLowercaseLetter(control: AbstractControl): ValidationErrors | null {
    if (!/[a-z]/.test(control.value)) {
      return { atLeastOneLowercaseLetter: true };
    }
    return null;
  }

  static atLeastOneUppercaseLetter(control: AbstractControl): ValidationErrors | null {
    if (!/[A-Z]/.test(control.value)) {
      return { atLeastOneUppercaseLetter: true };
    }
    return null;
  }
}
