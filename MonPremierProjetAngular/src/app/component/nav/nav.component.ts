import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouteAffichee } from 'src/app/model/route.model';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  routes: RouteAffichee[] = [
    {
      path: 'login', label: 'Login'
    },
    {
      path: 'premier', label: 'Fonction'
    },
    {
      path: 'participants', label: 'Participants'
    },
    {
      path: 'agrumes', label: 'Tableaux'
    },
    {
      path: '', label: 'Services'
    },
    {
      path: 'mon-premier/quatrieme', label: '4eme'
    },
    {
      path: 'mon-premier/cinquieme/123', label: 'Routing'
    },
    {
      path: 'mon-premier/sixieme', label: 'Formulaire'
    },
    {
      path: 'test-webservice', label: 'Test Webservice'
    },

  ];

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public authService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.authService.isLoggedInBehaviorSubject.subscribe((isLoggedIn: boolean) => {
      // On ajoute la route 'user-list' quand l'utilisateur est authentifie
      if (isLoggedIn && !this.routes.map(r => r.path).includes('user-list')) {
        this.routes.push({
          path: 'user-list', label: 'Liste Utilisateur'
        });
      }

      // On supprime la route 'user-list' quand l'utilisateur n'est plus authentifie
      if (!isLoggedIn && this.routes.map(r => r.path).includes('user-list')) {
        let indexOf = this.routes.findIndex(r => r.path == 'user-list');
        this.routes.splice(indexOf, 1)
      }
    });
  }
}
