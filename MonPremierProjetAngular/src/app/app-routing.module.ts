import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonPremierComposantComponent } from './component/mon-premier-composant/mon-premier-composant.component';
import { TestAppelWebserviceComponent } from './component/test-appel-webservice/test-appel-webservice.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: "premier",
    component: MonPremierComposantComponent
  },
  {
    path: 'test-webservice',
    component: TestAppelWebserviceComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
