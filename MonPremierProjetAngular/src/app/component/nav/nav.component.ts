import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { RouteAffichee } from 'src/app/model/route.model';

const TREE_DATA: RouteAffichee[] = [
  {
    label: 'Connexion',
    path: 'login'
  },
  {
    label: 'Apprendre',
    children: [
      {
        path: 'apprendre/exemple-fonction', label: 'Fonction'
      },
      {
        path: 'apprendre/exemple-tableaux', label: 'Tableaux'
      },
      {
        path: 'apprendre/exemple-router-param/123', label: 'Paramètre de Route'
      },
      {
        path: 'apprendre/exemple-service', label: 'Services'
      },
      {
        path: 'apprendre/exemple-formulaire', label: 'Formulaire'
      },

    ],

  },
  {
    label: 'TP',
    children: [
      {
        path: 'tp/participants', label: 'Participants'
      },
      {
        path: 'tp/la-reunion', label: 'La Réunion'
      },
      {
        path: 'tp/test-webservice', label: 'Appel Webservice'
      },
      {
        path: 'tp/user-list', label: 'La liste utilisateurs'
      },
    ]
  }

];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  nestedDataSource: MatTreeNestedDataSource<RouteAffichee>;
  dataChange: BehaviorSubject<RouteAffichee[]> = new BehaviorSubject<RouteAffichee[]>([]);

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataChange.subscribe(data => this.nestedDataSource.data = data);
    this.dataChange.next(TREE_DATA);
  }

}
