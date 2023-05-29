import { Component } from '@angular/core';
import { LanguageInformatique } from 'src/app/model/languageInformatique.model';

@Component({
  selector: 'app-agrumes',
  templateUrl: './agrumes.component.html',
  styleUrls: ['./agrumes.component.scss']
})
export class AgrumesComponent {

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
