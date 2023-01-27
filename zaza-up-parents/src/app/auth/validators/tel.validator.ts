import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneValidator(phoneRegex: RegExp): ValidatorFn {
    return (ctrl: AbstractControl): null | ValidationErrors => {
        if(phoneRegex.test(ctrl.value))
            return null;
        else return {
            phoneValidator: ctrl.value
        };
    }
}
