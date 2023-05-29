import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MonPremierService } from 'src/app/service/mon-premier-service.service';

@Component({
  selector: 'app-mon-quatrieme',
  templateUrl: './mon-quatrieme.component.html',
  styleUrls: ['./mon-quatrieme.component.scss']
})
export class MonQuatriemeComponent implements OnInit, OnDestroy {

  messageSubscription: Subscription

  constructor(public monPremierService: MonPremierService) { }

  ngOnInit(): void {
    // Initialisation : Appele avant la construction de la page
    this.messageSubscription = this.monPremierService.messageSubject.subscribe((evt: string) => {
      console.log('On a recu un message ', evt);
    });
  }

  ngOnDestroy(): void {
    // Appele avant la destruction du composant
    this.messageSubscription?.unsubscribe();
  }


}
