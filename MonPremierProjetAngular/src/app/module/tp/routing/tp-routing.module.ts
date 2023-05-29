import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestAppelWebserviceComponent } from "src/app/component/test-appel-webservice/test-appel-webservice.component";
import { UserListComponent } from "../component/user-list/user-list.component";
import { ParticipantsComponent } from "../component/participants/participants.component";
import { LaReunionComponent } from "../component/la-reunion/la-reunion.component";

const routes: Routes = [
    {
        path: "participants",
        component: ParticipantsComponent
    },
    {
        path: "la-reunion",
        component: LaReunionComponent
    },
    {
        path: 'test-webservice',
        component: TestAppelWebserviceComponent
    },
    {
        path: 'user-list',
        component: UserListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // on met forChild car c'est un module enfant ( contrairement a AppModule qui est le root )
    exports: [RouterModule]
})
export class TpRoutingModule { }