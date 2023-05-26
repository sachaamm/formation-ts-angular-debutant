import { Component, OnInit } from '@angular/core';
import { LanguageInformatique } from './model/languageInformatique.model';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MonPremierProjetAngular';

  constructor(private router: Router, private auth: AuthenticationService) {

  }

  ngOnInit(): void {
    this.auth.authenticate();
  }

  allerVersReunion(): void {
    this.router.navigate(['mon-premier', 'cinquieme', '123'])
  }

  receptionEmissionValeur(monEvent: LanguageInformatique) {
    console.log('Il est temps d\'apprendre le ' + monEvent);
  }
}
