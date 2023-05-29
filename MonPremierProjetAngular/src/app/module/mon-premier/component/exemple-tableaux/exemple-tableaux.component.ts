import { Component } from '@angular/core';
import { LanguageInformatique } from 'src/app/model/languageInformatique.model';

@Component({
  selector: 'app-exemple-tableaux',
  templateUrl: './exemple-tableaux.component.html',
  styleUrls: ['./exemple-tableaux.component.scss']
})
export class ExempleTableauxComponent {
  fruit = 'Poire'

  agrumes: string[] = ['Orange', 'Citron', 'Pamplemousse']

  languagesInformatiques: LanguageInformatique[] = [
    {
      name: 'TS', champsApplication: ['Angular']
    },
    {
      name: 'C#', champsApplication: ['.NET', 'Web']
    }
  ]

  estUnAgrume(monFruit: string): boolean {
    return this.agrumes.includes(monFruit);
  }
}
