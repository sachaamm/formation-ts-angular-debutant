import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InscriptionForm } from '../../model/inscription.interface';
import { matchingPassword } from '../../validator/matching-password';
import { createPasswordStrengthValidator } from '../../validator/strong-password.validator';

@Component({
  selector: 'app-exemple-formulaire',
  templateUrl: './exemple-formulaire.component.html',
  styleUrls: ['./exemple-formulaire.component.scss']
})
export class ExempleFormulaireComponent {

  formGroup: FormGroup<InscriptionForm>;
  formulaireSouscription: Subscription;

  ngOnInit(): void {

    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', []),
      confirmPassword: new FormControl('', [
        Validators.required,
        createPasswordStrengthValidator(),
        // matchingPassword(this.formGroup)
      ])
    });

    const passwordValidators = [
      Validators.required,
      createPasswordStrengthValidator(),
      matchingPassword(this.formGroup)
    ]

    this.formGroup.controls.password.setValidators(passwordValidators);

    // On ecoute les changements du formulaire
    this.formulaireSouscription = this.formGroup.valueChanges.subscribe((changes) => {
      // A chaque changement d'une valeur du form, je vais avoir un console.log
      // console.log('Form :', this.formGroup, ' changes ', changes);
      // let passwordMatch = this.formGroup.value?.password == this.formGroup.value?.confirmPassword;

      // let errors = this.formGroup.errors;
      // const passwordMismatchKey = 'passwordMismatch';
      // if (passwordMatch) {
      //   // On supprime l'erreur si elle existe dans errors
      //   if (Object.hasOwnProperty(passwordMismatchKey)) {
      //     errors[passwordMismatchKey] = null;
      //   }
      // } else {
      //   // On ajoute l'erreur si elle n'est pas deja presente
      //   errors = {
      //     passwordMismatch: true
      //   }
      // }

      // this.formGroup.setErrors(errors);
    });
  }

  ngOnDestroy(): void {
    this.formulaireSouscription?.unsubscribe();
  }

  submitForm(): void {
    console.log('Soumission formulaire');
    alert('J\'affiche dans la Pop-Up : SUBMIT');
  }


}
