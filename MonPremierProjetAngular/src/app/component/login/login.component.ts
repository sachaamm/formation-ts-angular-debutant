import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginResponseDto } from 'src/app/dto/login-response.dto';
import { LoginForm } from 'src/app/model/login.form';
import { createPasswordStrengthValidator } from 'src/app/module/mon-premier/validator/strong-password.validator';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private authenticationService: AuthenticationService) { }
  formGroup: FormGroup<LoginForm>;
  formulaireSouscription: Subscription;
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [
        Validators.required,
        createPasswordStrengthValidator()
      ])
    });
    this.formulaireSouscription = this.formGroup.valueChanges.subscribe((changes => {
      // console.log('Form = ', this.formGroup, ' changes ', changes);
      let errors = this.formGroup.errors;
      this.formGroup.setErrors(errors);
    }));
  }
  ngOnDestroy(): void {
    this.formulaireSouscription?.unsubscribe;
  }
  submitForm(): void {

    // const login = {
    //   email: 'myMail1@mail.com',
    //   password: 'myPassword1'
    // };

    this.authenticationService.currentUserEmail = this.formGroup.controls.email.value;
    this.authenticationService.currentUserPassword = this.formGroup.controls.password.value;

    this.authenticationService
      .authenticate(
        this.formGroup.controls.email.value,
        this.formGroup.controls.password.value
      ).subscribe((res: LoginResponseDto) => {
        console.log(res)
        this.authenticationService.token = res.token
        this.authenticationService.setSession(res)
      });
  }
}​
