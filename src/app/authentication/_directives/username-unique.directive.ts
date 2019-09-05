import {ValidationErrors, AsyncValidatorFn, AbstractControl} from '@angular/forms';
import {AuthenticationService} from '../../_services';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


export function usernameUniqueValidator(authenticationService: AuthenticationService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return authenticationService.checkForUsername(control.value)
      .pipe(map(res => {
        return (res.available) ? null : {usernameInUse: true};
      }));
  };
};
