import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private authService: AuthenticationService, private httpClient: HttpClient) { }

  testAppelWebserviceAvecRefreshToken() {
    if (!this.authService.isLoggedIn()) {

    }
  }
}
