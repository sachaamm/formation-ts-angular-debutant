import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { URL_API } from 'src/app/app.constants';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-test-appel-webservice',
  templateUrl: './test-appel-webservice.component.html',
  styleUrls: ['./test-appel-webservice.component.scss']
})
export class TestAppelWebserviceComponent {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  testAppelWebservice(): void {

    const options = {
      headers: {
        Authorization: 'Bearer ' + this.authService.token
      }
    };

    this.httpClient.get(URL_API + '/test', options).subscribe((res) => {
      console.log('resultat appel ', res);
    });
  }
}
