import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from 'src/app/app.constants';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FetcherService } from 'src/app/service/fetcher.service';

@Component({
  selector: 'app-test-appel-webservice',
  templateUrl: './test-appel-webservice.component.html',
  styleUrls: ['./test-appel-webservice.component.scss']
})
export class TestAppelWebserviceComponent {

  constructor(
    public authService: AuthenticationService,
    private fetcherService: FetcherService) {
  }

  testAppelWebservice() {
    this.fetcherService
      .testAppelWebserviceAvecRefreshToken().subscribe(res => console.log('my res , ', res));


  }
}
