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

  get currentUserEmail(): string {
    return localStorage.getItem("user_mail");
  }

  get currentUserPassword(): string {
    return localStorage.getItem("user_password");
  }

  token: string

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(URL_API + '/login', {
      email: email,
      password: password
    })
      .pipe(
        map((res: LoginResponseDto) => {
          this.token = res.token
          this.setSession(res, email, password)
          console.log('Connexion reussie, voici le token : ', res);
          return res
        }),
        catchError(error => {
          console.log('Erreur recontree lors de l\'authentification.');
          return of(
            { accepted: false, token: '', expiresIn: 5 }
          );
        })
      )
  }

  // J'enregistre mon token dans la session
  setSession(authResult: LoginResponseDto, email: string, password: string): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem("id_token", authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

    localStorage.setItem("user_mail", email);

    // Faille de securite : en pratique il ne faut pas enregistrer le mot de passe
    // dans le localStorage ( on fait cela pour repondre a l'exercice demande )
    // en pratique, il faut privilegier la mise en place de refresh token du jwt
    // plutot que de renvoyer a chaque fois les credentials de l'utilisateur pour obtenir un nouveau token.
    localStorage.setItem("user_password", password);

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
