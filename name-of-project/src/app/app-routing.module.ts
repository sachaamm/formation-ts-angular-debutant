import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'tutorials', loadChildren: () => import('./module/tutorial/tutorial.module').then(m => m.TutorialModule)
  },
  { path: 'learning-paths', loadChildren: () => import('./module/learning-path/learning-path.module').then(m => m.LearningPathModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
