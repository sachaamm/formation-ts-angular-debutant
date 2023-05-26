import { FormControl } from "@angular/forms";

export interface InscriptionForm {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
