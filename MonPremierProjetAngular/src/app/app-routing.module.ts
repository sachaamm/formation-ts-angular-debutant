import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestAppelWebserviceComponent } from './module/tp/component/test-appel-webservice/test-appel-webservice.component';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './module/tp/component/user-list/user-list.component';
import { ParticipantsComponent } from './module/tp/component/participants/participants.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "apprendre",
    loadChildren: () =>
      import('./module/mon-premier/mon-premier.module')
        .then(m => m.MonPremierModule)
  },
  {
    path: "tp",
    loadChildren: () =>
      import('./module/tp/tp.module')
        .then(m => m.TpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
