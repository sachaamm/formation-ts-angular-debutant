import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../app.constants';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { MyAuthenticatedMessageDto } from '../dto/my-message.dto';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private authService: AuthenticationService, private httpClient: HttpClient) { }

  testAppelWebserviceAvecRefreshToken(): Observable<MyAuthenticatedMessageDto> {
    return this.authService.prepareAuthenticatedRequest().pipe(
      switchMap(() => {
        return this.httpClient.get<MyAuthenticatedMessageDto>(URL_API + '/authenticated/random-message',
          this.authService.authenticatedHeaders());
      }),
      catchError(error => {
        // On catche l'erreur ...
        return of(null);
      })
    )
  }
}
