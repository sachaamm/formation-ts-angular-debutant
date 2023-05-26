import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mon-premier-composant',
  templateUrl: './mon-premier-composant.component.html',
  styleUrls: ['./mon-premier-composant.component.scss']
})
export class MonPremierComposantComponent {
  @Input() monTitre: string = ''

  fruit = 'Poire'

  agrumes: string[] = ['Orange', 'Citron', 'Pamplemousse']

  participants: string[] = ['Massamba', 'Simon', 'Adam', 'Makram', 'Julien', 'Andre', 'Sylvain', 'Julen']

  participant = ""

  participantsAyantParticipe: number[] = [5, 4, 2, 7, 1];

  monBooleen: boolean = true

  estUnAgrume(monFruit: string): boolean {
    return this.agrumes.includes(monFruit);
  }

  changerEtatBooleen(): void {
    this.monBooleen = !this.monBooleen;
  }

  selectionnerParticipantAleatoire(): void {
    const participantsDisponibles: string[] = [];

    this.participants.forEach((p, index) => {
      if (!this.participantsAyantParticipe.includes(index)) {
        participantsDisponibles.push(p);
      }
    });

    let random: number = Math.random() * participantsDisponibles.length;
    this.participant = participantsDisponibles[Math.floor(random)];
  }
}
