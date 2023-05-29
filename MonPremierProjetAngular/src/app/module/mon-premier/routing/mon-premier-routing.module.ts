import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleServiceComponent } from '../component/example-service/example-service.component';
import { ExempleFormulaireComponent } from '../component/exemple-formulaire/exemple-formulaire.component';
import { ExempleRoutingParamComponent } from '../component/exemple-routing-param/exemple-routing-param.component';
import { ExempleTableauxComponent } from '../component/exemple-tableaux/exemple-tableaux.component';
import { ExempleFonctionComponent } from '../component/exemple-fonction/exemple-fonction.component';

const routes: Routes = [
  {
    path: 'exemple-fonction',
    component: ExempleFonctionComponent
  },
  {
    path: 'exemple-tableaux',
    component: ExempleTableauxComponent
  },
  {
    path: 'exemple-router-param/:id',
    component: ExempleRoutingParamComponent
  },
  {
    path: 'exemple-service',
    component: ExampleServiceComponent
  },
  {
    path: 'exemple-formulaire',
    component: ExempleFormulaireComponent
  },
  {
    path: '**',
    redirectTo: 'exemple-fonction', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // on met forChild car c'est un module enfant ( contrairement a AppModule qui est le root )
  exports: [RouterModule]
})
export class MonPremierRoutingModule { }
