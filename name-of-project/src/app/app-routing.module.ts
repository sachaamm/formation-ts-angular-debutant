import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MyFormComponent } from './component/my-form/my-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'tutorials', loadChildren: () => import('./module/tutorial/tutorial.module').then(m => m.TutorialModule)
  },
  { path: 'my-dashboard', component: MyFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
