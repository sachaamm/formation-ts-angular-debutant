import { Component } from '@angular/core';
import { MonPremierService } from 'src/app/service/mon-premier-service.service';

@Component({
  selector: 'app-mon-troisieme-composant',
  templateUrl: './mon-troisieme-composant.component.html',
  styleUrls: ['./mon-troisieme-composant.component.scss']
})
export class MonTroisiemeComposantComponent {

  constructor(public monPremierService: MonPremierService) {

  }

  changerLaValeurProprieteDuService(nouvelleValeur: string): void {
    console.log(this.changerLaValeurProprieteDuService)
    this.monPremierService.test = nouvelleValeur
  }

  fonctionCommeVariable() {
    this.uneFonction;
    9;
    let maFunc = this.uneFonction;
    maFunc();
  }

  uneFonction() {
    console.log('une fonction');
  }
}
