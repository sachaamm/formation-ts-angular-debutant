import { Component } from '@angular/core';
import { MyAuthenticatedMessageDto } from 'src/app/dto/my-message.dto';

import { AuthenticationService } from 'src/app/service/authentication.service';
import { FetcherService } from 'src/app/service/fetcher.service';

@Component({
  selector: 'app-test-appel-webservice',
  templateUrl: './test-appel-webservice.component.html',
  styleUrls: ['./test-appel-webservice.component.scss']
})
export class TestAppelWebserviceComponent {

  resultatRequete: string;

  constructor(
    public authService: AuthenticationService,
    private fetcherService: FetcherService) {
  }

  testAppelWebservice(): void {
    this.fetcherService
      .testAppelWebserviceAvecRefreshToken()
      .subscribe((res: MyAuthenticatedMessageDto) => {
        this.resultatRequete = res.message;
        console.log('Resultat appel : ', res)
      });
  }
}
