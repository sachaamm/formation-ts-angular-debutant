import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonPremierComposantComponent } from './module/mon-premier/component/mon-premier-composant/mon-premier-composant.component';
import { TestAppelWebserviceComponent } from './component/test-appel-webservice/test-appel-webservice.component';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './module/mon-premier/component/user-list/user-list.component';
import { ParticipantsComponent } from './module/tp/component/participants/participants.component';
import { AgrumesComponent } from './module/mon-premier/component/agrumes/agrumes.component';

const routes: Routes = [
  {
    path: "premier",
    component: MonPremierComposantComponent
  },
  {
    path: "participants",
    component: ParticipantsComponent
  },
  {
    path: "agrumes",
    component: AgrumesComponent
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
    path: 'user-list',
    component: UserListComponent,
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
