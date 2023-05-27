import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';

import * as moment from "moment";
import { URL_API } from '../app.constants';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUserEmail: string
  currentUserPassword: string

  token: string

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<LoginResponseDto> {

    return this.httpClient.post<LoginResponseDto>(URL_API + '/login', {
      email: email,
      password: password
    })
      .pipe(
        map(res => {
          // this.setSession(res)
          console.log('resss ', res);
          return res
        }),
        catchError(error => {
          return of(
            { accepted: false, token: '', expiresIn: 5 }
          );
        })
      )

    // .subscribe((res: LoginResponseDto) => {
    //   if (res.accepted) {
    //     console.log(res);
    //     this.token = res.token;
    //     this.setSession(res)
    //   }
    // });
  }

  // J'enregistre mon token dans la session
  setSession(authResult: LoginResponseDto): void {
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
