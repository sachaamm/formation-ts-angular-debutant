import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, switchMap } from 'rxjs';
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

  /** Behavior Subject qui permet de declencher des evenements au changement de sa valeur */
  isLoggedInBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private httpClient: HttpClient) { }

  /** @summary
   Methode d'authentification de l'utilisateur
  Si l'authentification reussit, on enregistre dans le local storage le token de l'utilisateur
  Notre approche simplifiee est a revoir d'un point de vue de securite, notamment ces points :
  - Enregistrement du mot de passe dans le local storage
  - Utilisation d'un refresh token ( manquant )
  - Revocation du refresh token ( manquant )
  - Algorithme de rotation du token peut etre ameliore dans notre cas
  Documentez vous sur l'approche a suivre pour la mise en place d'un token JWT de maniere securisee
  ( pour le front et pour le back )
   */
  authenticate(email: string, password: string): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(URL_API + '/login', {
      email: email,
      password: password
    })
      .pipe(
        map((res: LoginResponseDto) => {
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

  prepareAuthenticatedRequest(): Observable<LoginResponseDto> {
    // Si le token n'est plus valide, je refait une authentification
    // ( Pratique depreciee et invalide concernant JWT mais )
    if (!this.tokenValid()) {
      console.log('token plus valide, on doit rafraichir...');

      return this
        .authenticate(this.currentUserEmail, this.currentUserPassword);
    }

    return of({
      accepted: true,
      token: localStorage.getItem("expires_at"),
      expiresIn: parseInt(localStorage.getItem("expires_at")),
    });
  }

  /** @summary J'enregistre mon token dans la session */
  setSession(authResult: LoginResponseDto, email: string, password: string): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem("id_token", authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

    localStorage.setItem("user_mail", email);

    // Faille de securite : en pratique il ne faut pas enregistrer le mot de passe
    // dans le localStorage ( on fait cela pour repondre a l'exercice demande )
    // Il faudrait privilegier la mise en place de refresh token du jwt
    // plutot que de renvoyer a chaque fois les credentials de l'utilisateur pour obtenir un nouveau token.
    localStorage.setItem("user_password", password);

    this.isLoggedInBehaviorSubject.next(true)

  }

  /** @summary Deconnexion */
  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");

    this.isLoggedInBehaviorSubject.next(false)
  }

  /** @summary Le token est il toujours valide ? */
  tokenValid(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  /** @summary Est ce qu'on a un utilisateur deconnecte ? */
  public isLoggedIn(): boolean {
    const token = localStorage.getItem('id_token')
    return token && token.length > 0
  }

  /** @summary Est ce que l'utilisateur est deconnecte ? */
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  /** @summary Quelle est la date d'expiration du token ? */
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  authenticatedHeaders(): object {
    return {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('id_token')
      }
    };
  }

}
