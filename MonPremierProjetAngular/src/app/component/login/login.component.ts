import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginResponseDto } from 'src/app/dto/login-response.dto';
import { LoginForm } from 'src/app/model/login.form';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  resultatLogin: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  formGroup: FormGroup<LoginForm>;
  formulaireSouscription: Subscription;
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [
        Validators.required,
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

    this.authenticationService
      .authenticate(
        this.formGroup.controls.email.value,
        this.formGroup.controls.password.value
      ).subscribe((res: LoginResponseDto) => {
        console.log(res)
        if (!res.accepted) {
          this.resultatLogin = 'Identifiants incorrects.'
        } else {
          this.router.navigate(['']);
        }
      });
  }
}​
