import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exemple-fonction',
  templateUrl: './exemple-fonction.component.html',
  styleUrls: ['./exemple-fonction.component.scss']
})
export class ExempleFonctionComponent {
  monBooleen: boolean = true

  changerEtatBooleen(): void {
    this.monBooleen = !this.monBooleen;
  }

}
