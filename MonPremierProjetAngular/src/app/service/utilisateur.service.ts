import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { URL_API } from '../app.constants';
import { UserDto } from '../dto/user.dto';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  /** @summary Recuperer la liste des utilisateurs */
  getUserList(): Observable<UserDto[]> {
    return this.authService.prepareAuthenticatedRequest().pipe(
      switchMap(() => {
        return this.httpClient.get<UserDto[]>(URL_API + '/authenticated/user-list', this.authService.authenticatedHeaders());
      }),
      catchError(error => {
        // On catche l'erreur ...
        return of([]);
      }))
  }
}
