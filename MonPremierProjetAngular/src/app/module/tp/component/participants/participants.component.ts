import { Component } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {

  participants: string[] = ['Massamba', 'Simon', 'Adam', 'Makrem', 'Julien', 'André', 'Sylvain', 'Julen']

  participant = ""

  participantsAyantParticipe: number[] = [5, 4, 2, 7, 1, 6, 0];

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
