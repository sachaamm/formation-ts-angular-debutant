import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mon-premier-composant',
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.scss']
})
export class MonPremierComposantComponent {
  @Input() monTitre: string = ''

  monBooleen: boolean = true

  changerEtatBooleen(): void {
    this.monBooleen = !this.monBooleen;
  }


}
