import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MonPremierService } from 'src/app/service/mon-premier-service.service';

@Component({
  selector: 'app-example-service-recepteur',
  templateUrl: './example-service-recepteur.component.html',
  styleUrls: ['./example-service-recepteur.component.scss']
})
export class ExampleServiceRecepteurComponent implements OnInit, OnDestroy {

  messageSubscription: Subscription;

  messages: string[] = [];

  constructor(public monPremierService: MonPremierService) { }

  ngOnInit(): void {
    // Initialisation : Appele avant la construction de la page
    this.messageSubscription = this.monPremierService.messageSubject.subscribe((evt: string) => {
      console.log('On a recu un message ', evt);
      this.messages.push(evt);
    });
  }

  ngOnDestroy(): void {
    // Appele avant la destruction du composant
    this.messageSubscription?.unsubscribe();
  }

}
