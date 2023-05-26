import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonCinquiemeComponent } from 'src/app/module/mon-premier/component/mon-cinquieme/mon-cinquieme.component';
import { MonQuatriemeComponent } from 'src/app/module/mon-premier/component/mon-quatrieme/mon-quatrieme.component';
import { MonSixiemeComponent } from '../component/mon-sixieme/mon-sixieme.component';

const routes: Routes = [
  {
    path: 'quatrieme',
    component: MonQuatriemeComponent
  },
  {
    path: 'cinquieme/:id',
    component: MonCinquiemeComponent
  },
  {
    path: 'sixieme',
    component: MonSixiemeComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'quatrieme', pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // on met forChild car c'est un module enfant ( contrairement a AppModule qui est le root )
  exports: [RouterModule]
})
export class MonPremierRoutingModule { }
