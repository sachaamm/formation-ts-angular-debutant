import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(): void {

    const login = {
      email: 'myMail1@mail.com',
      password: 'myPassgword1'
    };

    const url = 'http://localhost:4205/login';

    this.httpClient.post<LoginResponseDto>(url, login)
      .pipe(
        catchError(error => {
          console.log('error ', error);
          return of(
            { accepted: false }
          );
        })
      ).subscribe((res: LoginResponseDto) => {
        console.log('auth res ', res);
      });

  }
}
