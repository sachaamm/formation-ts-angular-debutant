import { Component } from '@angular/core';
import { MonPremierService } from 'src/app/service/mon-premier-service.service';

@Component({
  selector: 'app-example-service-emetteur',
  templateUrl: './example-service-emetteur.component.html',
  styleUrls: ['./example-service-emetteur.component.scss']
})
export class ExampleServiceEmetteurComponent {

  constructor(public monPremierService: MonPremierService) { }
}
