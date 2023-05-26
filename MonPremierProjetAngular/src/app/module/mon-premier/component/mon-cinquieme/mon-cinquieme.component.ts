import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonPremierService } from 'src/app/service/mon-premier-service.service';

@Component({
  selector: 'app-mon-cinquieme',
  templateUrl: './mon-cinquieme.component.html',
  styleUrls: ['./mon-cinquieme.component.scss']
})
export class MonCinquiemeComponent implements OnInit {

  idReunion: string

  constructor(public monPremierService: MonPremierService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idReunion = params['id'];
    });
  }
}
