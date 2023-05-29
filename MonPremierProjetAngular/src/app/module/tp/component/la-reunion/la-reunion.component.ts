import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonPremierService } from 'src/app/service/mon-premier-service.service';

@Component({
  selector: 'app-la-reunion',
  templateUrl: './la-reunion.component.html',
  styleUrls: ['./la-reunion.component.scss']
})
export class LaReunionComponent implements OnInit {

  idReunion: string

  constructor(public monPremierService: MonPremierService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idReunion = params['id'];
    });
  }

  creerReunion(): void {
    this.monPremierService.definirPersonnesDansSalleDeReunion();
  }


}
