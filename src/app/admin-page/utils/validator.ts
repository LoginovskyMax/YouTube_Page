import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function DateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors|null => {
    const value = new Date(control.value);
    const today = new Date();
    value.setHours(today.getHours());
    return today <= value ? { dateValid: true } : null;
  };
}

export function URLValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors|null => {
    let isValid = false;
    try {
      const value = new URL(control.value);
      isValid = true;
    } catch {
      isValid = false;
    }
    return !isValid ? { URLValid: true } : null;
  };
}
