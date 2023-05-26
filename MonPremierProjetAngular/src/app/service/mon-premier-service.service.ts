import { Injectable } from '@angular/core';
import { Person } from '../model/personne.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonPremierService {

  test: string = 'TEST'

  nombrePersonnes: number = 5;

  personnes: Person[] = [
    {
      name: 'Aurelie',
      age: 30
    },
    {
      name: 'Benoit',
      age: 42
    },
    {
      name: 'Corinne',
      age: 51
    },
    {
      name: 'Daniel',
      age: 34
    },
    {
      name: 'Eduardo',
      age: 22
    }
  ];

  personnesDansReunion: Person[] = [];

  messageSubject: Subject<string> = new Subject<string>()

  constructor() { }

  // Definir personnes dans salle de reunion
  definirPersonnesDansSalleDeReunion() {
    // Dans quatriemeComponent on a un bouton qui appelle cette fonction du service
    // On va creer un tableau de personnes
    // Ce tableau est affiche dans cinquiemeComponent

    // On a un nombre aleatoire de personnes dans la reunion compris entre 5 et 10

    let nombreAleatoireEntre2Et5 = 2 + Math.random() * (5 - 2);

    this.personnesDansReunion = [];

    while (this.personnesDansReunion.length < nombreAleatoireEntre2Et5) {
      let indexRandom = Math.floor(Math.random() * this.personnes.length);
      const personneRandom = this.personnes[indexRandom]
      if (!this.personnesDansReunion.includes(personneRandom)) {
        this.personnesDansReunion.push(personneRandom)
      }
    }

    this.personnesDansReunion = this.personnesDansReunion.slice()

    console.log(this.personnesDansReunion)
  }

  envoyerMessage(message: string) {
    this.messageSubject.next(message);
  }

}
