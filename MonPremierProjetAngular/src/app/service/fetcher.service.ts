import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../app.constants';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { MyMessageDto } from '../dto/my-message.dto';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private authService: AuthenticationService, private httpClient: HttpClient) { }

  testAppelWebserviceAvecRefreshToken(): Observable<MyMessageDto> {
    if (!this.authService.tokenValid()) {
      console.log('refreshing token ...', this.authService.currentUserEmail, this.authService.currentUserPassword);

      return this.authService
        .authenticate(this.authService.currentUserEmail, this.authService.currentUserPassword)
        .pipe(
          switchMap((res: LoginResponseDto) => {

            this.authService.token = res.token

            const options = {
              headers: {
                Authorization: 'Bearer ' + this.authService.token
              }
            };

            console.log('login response ', res);
            return this.httpClient.get<MyMessageDto>(URL_API + '/test', options);
          }),
          catchError(error => {
            console.error('errorr ', error);
            return of(
              { message: '' }
            );
          })
        );
      // .subscribe((res: LoginResponseDto) => {
      //   this.authService.token = res.token

      //   const options = {
      //     headers: {
      //       Authorization: 'Bearer ' + this.authService.token
      //     }
      //   };

      //   this.httpClient.get<object>(URL_API + '/test', options).subscribe(res => {
      //     // console.log(res)
      //   })
      // });




    }

    const options = {
      headers: {
        Authorization: 'Bearer ' + this.authService.token
      }
    };

    return this.httpClient.get<MyMessageDto>(URL_API + '/test', options);

  }
}
