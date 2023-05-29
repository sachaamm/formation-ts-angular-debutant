import { Component, EventEmitter, Output } from '@angular/core';
import { LanguageInformatique } from '../../../../model/languageInformatique.model';
import { MonPremierService } from 'src/app/service/mon-premier-service.service';

@Component({
  selector: 'app-mon-deuxieme-composant',
  templateUrl: './mon-deuxieme-composant.component.html',
  styleUrls: ['./mon-deuxieme-composant.component.scss']
})
export class MonDeuxiemeComposantComponent {

  @Output() emissionValeur: EventEmitter<LanguageInformatique> = new EventEmitter<LanguageInformatique>();

  languagesInformatiques: LanguageInformatique[] = [
    {
      name: 'TS', champsApplication: ['Angular']
    },
    {
      name: 'C#', champsApplication: ['.NET', 'Web']
    }
  ]

  constructor(public monPremierService: MonPremierService) {

  }

  emettreValeur(): void {
    this.emissionValeur.emit(this.languagesInformatiques[0]);
    this.languagesInformatiques.splice(0, 1);
  }
}
