import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonPremierComposantComponent } from './component/mon-premier-composant/mon-premier-composant.component';

const routes: Routes = [
  {
    path: "premier",
    component: MonPremierComposantComponent
  },
  {
    path: "mon-premier",
    loadChildren: () =>
      import('./module/mon-premier/mon-premier.module')
        .then(m => m.MonPremierModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
