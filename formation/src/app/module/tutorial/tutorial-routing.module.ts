import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsComponent } from './component/tutorials/tutorials.component';
import { TutorialPartComponent } from './component/tutorial-part/tutorial-part.component';

const routes: Routes = [
    { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
    { path: 'tutorial', component: TutorialsComponent },
    { path: 'tutorial/:id/:part', component: TutorialPartComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TutorialsRoutingModule { }
