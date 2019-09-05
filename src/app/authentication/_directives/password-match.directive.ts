import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';


export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass = control.get('password');
  const confirm = control.get('confirm');

  return pass.value === confirm.value ? null : {notSame: true};
};
