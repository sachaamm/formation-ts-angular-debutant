import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningPathsComponent } from './component/learning-paths/learning-paths.component';
import { LearningPathComponent } from './component/learning-path/learning-path.component';

const routes: Routes = [
    { path: '', redirectTo: 'path', pathMatch: 'full' },
    { path: 'path', component: LearningPathsComponent },
    { path: 'path/:id', component: LearningPathComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LearningPathRoutingModule { }
