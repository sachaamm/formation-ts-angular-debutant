import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouteAffichee } from 'src/app/model/route.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  routes: RouteAffichee[] = [
    {
      path: 'mon-premier/quatrieme', label: '4eme'
    },
    {
      path: 'mon-premier/cinquieme/123', label: '5eme'
    },
    {
      path: 'mon-premier/sixieme', label: '6eme'
    }
  ];

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
