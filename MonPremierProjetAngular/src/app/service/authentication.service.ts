import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';

import * as moment from "moment";
import { URL_API } from '../app.constants';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token: string

  constructor(private httpClient: HttpClient) { }

  authenticate(): void {

    const login = {
      email: 'myMail1@mail.com',
      password: 'myPassword1'
    };

    this.httpClient.post<LoginResponseDto>(URL_API + '/login', login)
      .pipe(
        catchError(error => {
          return of(
            { accepted: false }
          );
        })
      ).subscribe((res: LoginResponseDto) => {
        if (res.accepted) {
          console.log(res);
          this.token = res.token;
          this.setSession(res)
        }
      });
  }

  // J'enregistre mon token dans la session
  private setSession(authResult: LoginResponseDto): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  tokenValid(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('id_token')
    return token && token.length > 0
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
