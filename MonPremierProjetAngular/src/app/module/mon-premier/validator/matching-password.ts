import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { InscriptionForm } from "../model/inscription.interface";

// Fonction de validation qui verifie la correspondance des mots de passe.
export function matchingPassword(otherField: FormGroup<InscriptionForm>): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const match =
      control.value == otherField.controls.confirmPassword.value;
    return match ? null : { passwordMismatch: true }
  };
}
